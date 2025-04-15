const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const HealthPlan = require('../models/HealthPlan');

// Get all health plans for the logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const plans = await HealthPlan.find({ user: req.user.id });
    const formattedPlans = {
      diet: plans.filter(plan => plan.type === 'diet'),
      workout: plans.filter(plan => plan.type === 'workout')
    };
    res.json(formattedPlans);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Add a new health plan
router.post('/', auth, async (req, res) => {
  try {
    const { type, title, description } = req.body;
    const newPlan = new HealthPlan({
      user: req.user.id,
      type,
      title,
      description
    });
    const plan = await newPlan.save();
    res.json(plan);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a health plan
router.delete('/:id', auth, async (req, res) => {
  try {
    const plan = await HealthPlan.findById(req.params.id);
    if (!plan) {
      return res.status(404).json({ msg: 'Plan not found' });
    }
    if (plan.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }
    await plan.remove();
    res.json({ msg: 'Plan removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router; 