// routes/workoutRoutes.js
const express = require('express');
const router = express.Router();
const {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  fetchWorkoutsFromAPI,
} = require('../controllers/workoutController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getWorkouts)
  .post(protect, admin, createWorkout);

router.route('/fetch-from-api')
  .get(protect, admin, fetchWorkoutsFromAPI);

router.route('/:id')
  .get(getWorkoutById)
  .put(protect, admin, updateWorkout)
  .delete(protect, admin, deleteWorkout);

module.exports = router;