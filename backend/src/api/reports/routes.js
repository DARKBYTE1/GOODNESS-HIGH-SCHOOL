const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/academic', authenticate, (req, res) => {
  res.json({ success: true, message: 'Academic report endpoint' });
});

router.get('/financial', authenticate, (req, res) => {
  res.json({ success: true, message: 'Financial report endpoint' });
});

router.get('/attendance', authenticate, (req, res) => {
  res.json({ success: true, message: 'Attendance report endpoint' });
});

router.post('/export', authenticate, (req, res) => {
  res.json({ success: true, message: 'Export report endpoint' });
});

module.exports = router;
