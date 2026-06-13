const express = require('express');
const router = express.Router();
const { authenticate } = require('../../middleware/auth');

router.get('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Classes list endpoint' });
});

router.post('/', authenticate, (req, res) => {
  res.json({ success: true, message: 'Create class endpoint' });
});

router.get('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Get class endpoint' });
});

router.put('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Update class endpoint' });
});

router.delete('/:id', authenticate, (req, res) => {
  res.json({ success: true, message: 'Delete class endpoint' });
});

module.exports = router;
