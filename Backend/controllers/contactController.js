// controllers/contactController.js
const asyncHandler = require('express-async-handler');
const Contact = require('../models/Contact');

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const contact = await Contact.create({
    name,
    email,
    message,
  });

  if (contact) {
    res.status(201).json({
      success: true,
      message: 'Your message has been submitted successfully',
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Private/Admin
const getContactSubmissions = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.json(contacts);
});

// @desc    Get contact submission by ID
// @route   GET /api/contact/:id
// @access  Private/Admin
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    res.json(contact);
  } else {
    res.status(404);
    throw new Error('Contact submission not found');
  }
});

// @desc    Update contact status
// @route   PUT /api/contact/:id
// @access  Private/Admin
const updateContactStatus = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    contact.status = req.body.status || contact.status;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } else {
    res.status(404);
    throw new Error('Contact submission not found');
  }
});

// @desc    Delete contact submission
// @route   DELETE /api/contact/:id
// @access  Private/Admin
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (contact) {
    await Contact.deleteOne({ _id: contact._id });
    res.json({ message: 'Contact submission removed' });
  } else {
    res.status(404);
    throw new Error('Contact submission not found');
  }
});

module.exports = {
  submitContactForm,
  getContactSubmissions,
  getContactById,
  updateContactStatus,
  deleteContact,
};