const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Exams list endpoint' });
});

router.post('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Create exam endpoint' });
});

router.get('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Get exam details endpoint' });
});

router.post('/:id/start', authenticate, (req, res) => {
  res.json({ success: true, message: 'Start CBT exam endpoint' });
});

module.exports = router;
