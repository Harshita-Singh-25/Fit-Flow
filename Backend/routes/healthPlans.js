const express = require('express');
const router = express.Router();
const HealthPlan = require('../models/HealthPlan');

// Get all health plans
router.get('/', async (req, res) => {
  try {
    const plans = await HealthPlan.find();
    const formattedPlans = {
      diet: plans.filter(plan => plan.type === 'diet'),
      workout: plans.filter(plan => plan.type === 'workout')
    };
    res.json(formattedPlans);
  } catch (err) {
    console.error('Error in GET /health-plans:', err);
    res.status(500).send('Server Error');
  }
});

// Add a new health plan
router.post('/', async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const newPlan = new HealthPlan({
      type,
      title,
      description
    });
    const plan = await newPlan.save();
    res.json(plan);
  } catch (err) {
    console.error('Error in POST /health-plans:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router; 