const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Payroll list endpoint' });
});

router.post('/process', authenticate, (req, res) => {
  res.json({ success: true, message: 'Process payroll endpoint' });
});

router.get('/staff/:staffId', authenticate, (req, res) => {
  res.json({ success: true, message: 'Staff payslip endpoint' });
});

module.exports = router;
