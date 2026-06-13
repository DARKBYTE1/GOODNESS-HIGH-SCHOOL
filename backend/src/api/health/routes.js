const express = require('express');
const router = express.Router();
const sequelize = require('../../config/database');
const redisClient = require('../../config/redis');

// Health check endpoint
router.get('/', async (req, res) => {
  try {
    // Check database
    await sequelize.authenticate();

    // Check Redis
    const redisStatus = redisClient.isOpen ? 'connected' : 'disconnected';

    res.json({
      success: true,
      status: 'healthy',
      timestamp: new Date(),
      services: {
        database: 'connected',
        redis: redisStatus,
        api: 'running'
      }
    });
  } catch (error) {
    res.status(503).json({
      success: false,
      status: 'unhealthy',
      message: error.message
    });
  }
});

module.exports = router;
