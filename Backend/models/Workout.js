// models/Workout.js
const mongoose = require('mongoose');

const workoutSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['Yoga', 'HIIT', 'Meditation', 'Strength', 'Cardio', 'Flexibility'],
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced'],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number, // in minutes
      required: true,
    },
    gifUrl: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    bodyPart: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      default: 'None',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    requiresSubscription: {
      type: String,
      enum: ['Free', 'Pro', 'Premium'],
      default: 'Free',
    },
  },
  {
    timestamps: true,
  }
);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;