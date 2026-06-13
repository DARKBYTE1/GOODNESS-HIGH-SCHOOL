const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

// Import routes
const authRoutes = require('./api/auth/routes');
const superAdminRoutes = require('./api/super-admin/routes');
const studentRoutes = require('./api/students/routes');
const staffRoutes = require('./api/staff/routes');
const classRoutes = require('./api/classes/routes');
const attendanceRoutes = require('./api/attendance/routes');
const examRoutes = require('./api/exams/routes');
const resultRoutes = require('./api/results/routes');
const feeRoutes = require('./api/fees/routes');
const payrollRoutes = require('./api/payroll/routes');
const communicationRoutes = require('./api/communications/routes');
const reportRoutes = require('./api/reports/routes');
const healthRoutes = require('./api/health/routes');

// Middleware imports
const { errorHandler } = require('./middleware/errorHandler');
const { auditLogger } = require('./middleware/auditLogger');

const app = express();

// Security Middleware
app.use(helmet());

// CORS Configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));

// Logging Middleware
app.use(morgan('combined'));

// Body Parser Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Compression Middleware
app.use(compression());

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.API_RATE_WINDOW) * 60 * 1000 || 15 * 60 * 1000,
  max: parseInt(process.env.API_RATE_LIMIT) || 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Static Files
app.use('/uploads', express.static('uploads'));

// Audit Logging Middleware
app.use(auditLogger);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/super-admin', superAdminRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/fees', feeRoutes);
app.use('/api/payroll', payrollRoutes);
app.use('/api/communications', communicationRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/health', healthRoutes);

// Welcome Route
app.get('/', (req, res) => {
  res.json({
    message: 'GOODNESS High School Management System API',
    version: process.env.APP_VERSION || '1.0.0',
    status: 'running'
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.originalUrl
  });
});

// Global Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`\n🚀 GOODNESS High School SMS API`);
  console.log(`📍 Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`\n✅ Ready to accept requests\n`);
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

module.exports = app;
