const mongoose = require('mongoose');

const HealthPlanSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['diet', 'workout']
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('healthPlan', HealthPlanSchema); 