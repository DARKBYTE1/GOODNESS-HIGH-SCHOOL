-- GOODNESS High School SMS - Complete Database Schema
-- PostgreSQL Database Structure

-- Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'student',
  school_id UUID,
  is_active BOOLEAN DEFAULT true,
  two_fa_enabled BOOLEAN DEFAULT false,
  two_fa_secret VARCHAR(255),
  last_login TIMESTAMP,
  profile_photo VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_users_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_school_id ON users(school_id);
CREATE INDEX idx_users_role ON users(role);

-- Schools Table
CREATE TABLE IF NOT EXISTS schools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  school_name VARCHAR(255) NOT NULL,
  school_code VARCHAR(50) UNIQUE NOT NULL,
  school_type VARCHAR(50) NOT NULL,
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100),
  website VARCHAR(255),
  logo_url VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_schools_status ON schools(status);
CREATE INDEX idx_schools_code ON schools(school_code);

-- Franchises Table
CREATE TABLE IF NOT EXISTS franchises (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  franchise_name VARCHAR(255) NOT NULL,
  franchise_code VARCHAR(50) UNIQUE NOT NULL,
  owner_name VARCHAR(100),
  owner_email VARCHAR(100),
  owner_phone VARCHAR(20),
  address VARCHAR(255),
  city VARCHAR(100),
  state VARCHAR(100),
  franchise_fee DECIMAL(10, 2),
  package_type VARCHAR(50),
  status VARCHAR(50) DEFAULT 'pending',
  contract_start_date DATE,
  contract_end_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_franchises_status ON franchises(status);

-- Roles Table
CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role_name VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  permissions JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs Table
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  school_id UUID,
  action VARCHAR(255),
  method VARCHAR(10),
  path VARCHAR(255),
  ip VARCHAR(45),
  user_agent TEXT,
  request_body JSONB,
  response_status INTEGER,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_audit_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  CONSTRAINT fk_audit_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE SET NULL
);

CREATE INDEX idx_audit_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_school_id ON audit_logs(school_id);
CREATE INDEX idx_audit_timestamp ON audit_logs(timestamp);

-- Students Table
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  admission_number VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  date_of_birth DATE,
  gender VARCHAR(20),
  nationality VARCHAR(100),
  state_of_origin VARCHAR(100),
  passport_photo_url VARCHAR(255),
  birth_certificate_url VARCHAR(255),
  school_id UUID NOT NULL,
  class_id UUID,
  parent_id UUID,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_students_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
  CONSTRAINT fk_students_class FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE SET NULL
);

CREATE INDEX idx_students_school_id ON students(school_id);
CREATE INDEX idx_students_class_id ON students(class_id);
CREATE INDEX idx_students_admission_number ON students(admission_number);

-- Staff Table
CREATE TABLE IF NOT EXISTS staff (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  staff_number VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  middle_name VARCHAR(100),
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  phone VARCHAR(20),
  designation VARCHAR(100),
  school_id UUID NOT NULL,
  department VARCHAR(100),
  date_of_employment DATE,
  date_of_birth DATE,
  qualification VARCHAR(255),
  status VARCHAR(50) DEFAULT 'active',
  basic_salary DECIMAL(10, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_staff_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

CREATE INDEX idx_staff_school_id ON staff(school_id);
CREATE INDEX idx_staff_designation ON staff(designation);

-- Classes Table
CREATE TABLE IF NOT EXISTS classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  class_name VARCHAR(100) NOT NULL,
  class_arm VARCHAR(50),
  school_id UUID NOT NULL,
  class_teacher_id UUID,
  capacity INTEGER,
  current_enrollment INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_classes_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
  CONSTRAINT fk_classes_teacher FOREIGN KEY (class_teacher_id) REFERENCES staff(id) ON DELETE SET NULL
);

CREATE INDEX idx_classes_school_id ON classes(school_id);

-- Subjects Table
CREATE TABLE IF NOT EXISTS subjects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  subject_name VARCHAR(100) NOT NULL,
  subject_code VARCHAR(50),
  school_id UUID NOT NULL,
  subject_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_subjects_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

CREATE INDEX idx_subjects_school_id ON subjects(school_id);

-- Attendance Table
CREATE TABLE IF NOT EXISTS attendance (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID NOT NULL,
  class_id UUID NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(20),
  remark TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_attendance_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  CONSTRAINT fk_attendance_class FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE
);

CREATE INDEX idx_attendance_student_id ON attendance(student_id);
CREATE INDEX idx_attendance_date ON attendance(date);
CREATE UNIQUE INDEX idx_attendance_unique ON attendance(student_id, class_id, date);

-- Exams Table
CREATE TABLE IF NOT EXISTS exams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  exam_name VARCHAR(100) NOT NULL,
  exam_type VARCHAR(50),
  school_id UUID NOT NULL,
  class_id UUID NOT NULL,
  subject_id UUID NOT NULL,
  total_score INTEGER,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_exams_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
  CONSTRAINT fk_exams_class FOREIGN KEY (class_id) REFERENCES classes(id) ON DELETE CASCADE,
  CONSTRAINT fk_exams_subject FOREIGN KEY (subject_id) REFERENCES subjects(id) ON DELETE CASCADE
);

CREATE INDEX idx_exams_school_id ON exams(school_id);
CREATE INDEX idx_exams_class_id ON exams(class_id);

-- Results Table
CREATE TABLE IF NOT EXISTS results (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID NOT NULL,
  exam_id UUID NOT NULL,
  score DECIMAL(5, 2),
  grade VARCHAR(5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_results_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  CONSTRAINT fk_results_exam FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE
);

CREATE INDEX idx_results_student_id ON results(student_id);
CREATE INDEX idx_results_exam_id ON results(exam_id);

-- Fees Table
CREATE TABLE IF NOT EXISTS fees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  student_id UUID NOT NULL,
  school_id UUID NOT NULL,
  term VARCHAR(50),
  fee_type VARCHAR(100),
  amount DECIMAL(10, 2),
  status VARCHAR(50) DEFAULT 'pending',
  due_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_fees_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE,
  CONSTRAINT fk_fees_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

CREATE INDEX idx_fees_student_id ON fees(student_id);
CREATE INDEX idx_fees_status ON fees(status);

-- Payments Table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  fee_id UUID NOT NULL,
  student_id UUID NOT NULL,
  amount DECIMAL(10, 2),
  payment_method VARCHAR(50),
  transaction_reference VARCHAR(100),
  status VARCHAR(50) DEFAULT 'pending',
  payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payments_fee FOREIGN KEY (fee_id) REFERENCES fees(id) ON DELETE CASCADE,
  CONSTRAINT fk_payments_student FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

CREATE INDEX idx_payments_student_id ON payments(student_id);
CREATE INDEX idx_payments_status ON payments(status);

-- Payroll Table
CREATE TABLE IF NOT EXISTS payroll (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  staff_id UUID NOT NULL,
  school_id UUID NOT NULL,
  basic_salary DECIMAL(10, 2),
  allowances DECIMAL(10, 2),
  deductions DECIMAL(10, 2),
  net_salary DECIMAL(10, 2),
  payroll_month VARCHAR(50),
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_payroll_staff FOREIGN KEY (staff_id) REFERENCES staff(id) ON DELETE CASCADE,
  CONSTRAINT fk_payroll_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

CREATE INDEX idx_payroll_staff_id ON payroll(staff_id);
CREATE INDEX idx_payroll_status ON payroll(status);

-- Backups Table
CREATE TABLE IF NOT EXISTS backups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  backup_name VARCHAR(255),
  backup_size BIGINT,
  backup_path VARCHAR(255),
  status VARCHAR(50),
  backup_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  restored_at TIMESTAMP
);

CREATE INDEX idx_backups_date ON backups(backup_date);

-- System Configuration Table
CREATE TABLE IF NOT EXISTS system_configuration (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  config_key VARCHAR(100) UNIQUE NOT NULL,
  config_value TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Communications Table
CREATE TABLE IF NOT EXISTS communications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipient_id UUID,
  school_id UUID,
  message_type VARCHAR(50),
  subject VARCHAR(255),
  body TEXT,
  is_sent BOOLEAN DEFAULT false,
  sent_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_communications_recipient FOREIGN KEY (recipient_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_communications_school FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE
);

CREATE INDEX idx_communications_recipient_id ON communications(recipient_id);
CREATE INDEX idx_communications_type ON communications(message_type);

-- Create Default Super Admin User
INSERT INTO users (
  id,
  first_name,
  last_name,
  email,
  password,
  role,
  is_active,
  created_at
) VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Super',
  'Admin',
  'superadmin@goodness-sms.com',
  '$2a$10$YourHashedPasswordHere', -- This should be updated with actual bcrypt hash
  'super_admin',
  true,
  CURRENT_TIMESTAMP
) ON CONFLICT DO NOTHING;

-- Create Default Roles
INSERT INTO roles (id, role_name, description, permissions) VALUES
  (uuid_generate_v4(), 'super_admin', 'Super Administrator with full system access', '{}'),
  (uuid_generate_v4(), 'school_admin', 'School Administrator', '{}'),
  (uuid_generate_v4(), 'principal', 'School Principal', '{}'),
  (uuid_generate_v4(), 'vice_principal', 'Vice Principal', '{}'),
  (uuid_generate_v4(), 'hod', 'Head of Department', '{}'),
  (uuid_generate_v4(), 'class_teacher', 'Class Teacher', '{}'),
  (uuid_generate_v4(), 'teacher', 'Subject Teacher', '{}'),
  (uuid_generate_v4(), 'admin_staff', 'Administrative Staff', '{}'),
  (uuid_generate_v4(), 'support_staff', 'Support Staff', '{}'),
  (uuid_generate_v4(), 'student', 'Student', '{}'),
  (uuid_generate_v4(), 'parent', 'Parent/Guardian', '{}')
ON CONFLICT DO NOTHING;

-- Create Views for Analytics
CREATE OR REPLACE VIEW student_statistics AS
SELECT 
  s.school_id,
  COUNT(DISTINCT st.id) as total_students,
  COUNT(DISTINCT st.class_id) as enrolled_classes,
  COUNT(CASE WHEN st.status = 'active' THEN 1 END) as active_students
FROM schools s
LEFT JOIN students st ON s.id = st.school_id
GROUP BY s.school_id;

CREATE OR REPLACE VIEW staff_statistics AS
SELECT 
  s.school_id,
  COUNT(DISTINCT s.id) as total_staff,
  COUNT(CASE WHEN s.status = 'active' THEN 1 END) as active_staff,
  COUNT(DISTINCT s.designation) as designations
FROM staff s
GROUP BY s.school_id;

CREATE OR REPLACE VIEW fee_collection_view AS
SELECT 
  f.school_id,
  f.term,
  COUNT(f.id) as total_fees,
  SUM(CASE WHEN f.status = 'paid' THEN f.amount ELSE 0 END) as collected_amount,
  SUM(f.amount) as total_expected_amount
FROM fees f
GROUP BY f.school_id, f.term;

-- Grant Permissions
GRANT CONNECT ON DATABASE goodness_sms TO postgres;
GRANT USAGE ON SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
