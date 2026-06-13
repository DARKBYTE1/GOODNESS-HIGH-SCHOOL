const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated'
      });
    }

    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions'
      });
    }

    next();
  };
};

const ROLES = {
  SUPER_ADMIN: 'super_admin',
  SCHOOL_ADMIN: 'school_admin',
  PRINCIPAL: 'principal',
  VICE_PRINCIPAL: 'vice_principal',
  HOD: 'hod',
  CLASS_TEACHER: 'class_teacher',
  TEACHER: 'teacher',
  ADMIN_STAFF: 'admin_staff',
  SUPPORT_STAFF: 'support_staff',
  STUDENT: 'student',
  PARENT: 'parent'
};

module.exports = { authorize, ROLES };
