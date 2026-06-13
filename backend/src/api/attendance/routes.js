const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Attendance list endpoint' });
});

router.post('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Record attendance endpoint' });
});

router.get('/report', authenticate, (req, res) => {
  res.json({ success: true, message: 'Attendance report endpoint' });
});

module.exports = router;
