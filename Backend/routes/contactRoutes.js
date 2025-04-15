// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  getContactSubmissions,
  getContactById,
  updateContactStatus,
  deleteContact,
} = require('../controllers/contactController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .post(submitContactForm)
  .get(protect, admin, getContactSubmissions);

router.route('/:id')
  .get(protect, admin, getContactById)
  .put(protect, admin, updateContactStatus)
  .delete(protect, admin, deleteContact);

module.exports = router;

