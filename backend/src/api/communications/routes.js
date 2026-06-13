const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.post('/sms', authenticate, (req, res) => {
  res.json({ success: true, message: 'Send SMS endpoint' });
});

router.post('/email', authenticate, (req, res) => {
  res.json({ success: true, message: 'Send email endpoint' });
});

router.post('/whatsapp', authenticate, (req, res) => {
  res.json({ success: true, message: 'Send WhatsApp message endpoint' });
});

router.get('/notifications', authenticate, (req, res) => {
  res.json({ success: true, message: 'Get notifications endpoint' });
});

module.exports = router;
