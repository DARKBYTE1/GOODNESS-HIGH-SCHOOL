const { AuditLog } = require('../models');

const auditLogger = async (req, res, next) => {
  // Store original send
  const originalSend = res.send;
  const originalJson = res.json;

  let responseBody = {};

  // Override send
  res.send = function (data) {
    responseBody = data;
    return originalSend.call(this, data);
  };

  // Override json
  res.json = function (data) {
    responseBody = data;
    return originalJson.call(this, data);
  };

  // Log on finish
  res.on('finish', async () => {
    try {
      // Skip sensitive routes
      if (req.path.includes('/health')) return;

      await AuditLog.create({
        userId: req.user?.id || null,
        schoolId: req.user?.schoolId || null,
        action: `${req.method} ${req.path}`,
        method: req.method,
        path: req.path,
        ip: req.ip,
        userAgent: req.get('user-agent'),
        requestBody: req.body,
        responseStatus: res.statusCode,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Audit logging error:', error);
    }
  });

  next();
};

module.exports = { auditLogger };
