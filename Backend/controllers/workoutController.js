// controllers/workoutController.js
const asyncHandler = require('express-async-handler');
const axios = require('axios');
const Workout = require('../models/Workout');

// @desc    Fetch all workouts
// @route   GET /api/workouts
// @access  Public
const getWorkouts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
    
  const type = req.query.type ? { type: req.query.type } : {};
  const difficulty = req.query.difficulty ? { difficulty: req.query.difficulty } : {};
  const bodyPart = req.query.bodyPart ? { bodyPart: req.query.bodyPart } : {};
  
  const count = await Workout.countDocuments({ ...keyword, ...type, ...difficulty, ...bodyPart });
  const workouts = await Workout.find({ ...keyword, ...type, ...difficulty, ...bodyPart })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 });

  // Filter workouts based on user subscription
  const filteredWorkouts = workouts.map(workout => {
    // If user is logged in, check their subscription against workout requirements
    const userSubscription = req.user ? req.user.subscriptionPlan : 'Free';
    
    // Simple subscription access logic
    const subscriptionLevels = { 'Free': 0, 'Pro': 1, 'Premium': 2 };
    const hasAccess = subscriptionLevels[userSubscription] >= subscriptionLevels[workout.requiresSubscription];
    
    return {
      ...workout._doc,
      locked: !hasAccess,
    };
  });

  res.json({
    workouts: filteredWorkouts,
    page,
    pages: Math.ceil(count / pageSize),
    count,
  });
});

// @desc    Fetch single workout by ID
// @route   GET /api/workouts/:id
// @access  Public
const getWorkoutById = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (workout) {
    // Check if user has access to this workout
    const userSubscription = req.user ? req.user.subscriptionPlan : 'Free';
    const subscriptionLevels = { 'Free': 0, 'Pro': 1, 'Premium': 2 };
    const hasAccess = subscriptionLevels[userSubscription] >= subscriptionLevels[workout.requiresSubscription];

    res.json({
      ...workout._doc,
      locked: !hasAccess,
    });
  } else {
    res.status(404);
    throw new Error('Workout not found');
  }
});

// @desc    Create a workout
// @route   POST /api/workouts
// @access  Private/Admin
const createWorkout = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    difficulty,
    description,
    duration,
    gifUrl,
    instructions,
    bodyPart,
    equipment,
    isFeatured,
    requiresSubscription,
  } = req.body;

  const workout = new Workout({
    name,
    type,
    difficulty,
    description,
    duration,
    gifUrl,
    instructions,
    bodyPart,
    equipment: equipment || 'None',
    isFeatured: isFeatured || false,
    requiresSubscription: requiresSubscription || 'Free',
  });

  const createdWorkout = await workout.save();
  res.status(201).json(createdWorkout);
});

// @desc    Update a workout
// @route   PUT /api/workouts/:id
// @access  Private/Admin
const updateWorkout = asyncHandler(async (req, res) => {
  const {
    name,
    type,
    difficulty,
    description,
    duration,
    gifUrl,
    instructions,
    bodyPart,
    equipment,
    isFeatured,
    requiresSubscription,
  } = req.body;

  const workout = await Workout.findById(req.params.id);

  if (workout) {
    workout.name = name || workout.name;
    workout.type = type || workout.type;
    workout.difficulty = difficulty || workout.difficulty;
    workout.description = description || workout.description;
    workout.duration = duration || workout.duration;
    workout.gifUrl = gifUrl || workout.gifUrl;
    workout.instructions = instructions || workout.instructions;
    workout.bodyPart = bodyPart || workout.bodyPart;
    workout.equipment = equipment || workout.equipment;
    workout.isFeatured = isFeatured !== undefined ? isFeatured : workout.isFeatured;
    workout.requiresSubscription = requiresSubscription || workout.requiresSubscription;

    const updatedWorkout = await workout.save();
    res.json(updatedWorkout);
  } else {
    res.status(404);
    throw new Error('Workout not found');
  }
});

// @desc    Delete a workout
// @route   DELETE /api/workouts/:id
// @access  Private/Admin
const deleteWorkout = asyncHandler(async (req, res) => {
  const workout = await Workout.findById(req.params.id);

  if (workout) {
    await Workout.deleteOne({ _id: workout._id });
    res.json({ message: 'Workout removed' });
  } else {
    res.status(404);
    throw new Error('Workout not found');
  }
});

// @desc    Fetch workouts from external API and save to database
// @route   GET /api/workouts/fetch-from-api
// @access  Private/Admin
const fetchWorkoutsFromAPI = asyncHandler(async (req, res) => {
  try {
    // For this example, we'll use ExerciseDB API (RapidAPI)
    const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      params: { limit: '20' }, // Adjust limit as needed
      headers: {
        'X-RapidAPI-Key': process.env.EXERCISE_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    const exercises = response.data;

    // Map API data to our schema
    const workouts = exercises.map(exercise => ({
      name: exercise.name,
      type: mapExerciseTypeToWorkoutType(exercise.bodyPart),
      difficulty: 'Intermediate', // Default value since API doesn't provide difficulty
      description: `${exercise.name} targeting ${exercise.bodyPart} using ${exercise.equipment}`,
      duration: 10, // Default value
      gifUrl: exercise.gifUrl,
      instructions: exercise.instructions || exercise.name,
      bodyPart: exercise.bodyPart,
      equipment: exercise.equipment,
      isFeatured: false,
      requiresSubscription: 'Free'
    }));

    // Save to database (skip existing ones)
    let savedCount = 0;
    for (let workout of workouts) {
      const exists = await Workout.findOne({ name: workout.name });
      if (!exists) {
        await Workout.create(workout);
        savedCount++;
      }
    }

    res.json({
      message: `Successfully imported ${savedCount} new workouts`,
      totalFetched: workouts.length
    });
  } catch (error) {
    console.error('API fetch error:', error);
    res.status(500);
    throw new Error('Failed to fetch workouts from API');
  }
});

// Helper function to map exercise types
function mapExerciseTypeToWorkoutType(bodyPart) {
  const mapping = {
    'back': 'Strength',
    'cardio': 'Cardio',
    'chest': 'Strength',
    'lower arms': 'Strength',
    'lower legs': 'Strength',
    'neck': 'Flexibility',
    'shoulders': 'Strength',
    'upper arms': 'Strength',
    'upper legs': 'Strength',
    'waist': 'Strength'
  };
  
  return mapping[bodyPart] || 'Strength';
}

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  fetchWorkoutsFromAPI,
};