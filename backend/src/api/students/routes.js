const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Students list endpoint' });
});

router.post('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Create student endpoint' });
});

router.get('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Get student endpoint' });
});

router.put('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Update student endpoint' });
});

router.delete('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Delete student endpoint' });
});

module.exports = router;
