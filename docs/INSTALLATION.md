# Installation Guide - GOODNESS High School SMS

## Prerequisites

Before starting the installation, ensure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **PostgreSQL** (v14 or higher)
- **Redis** (v6 or higher)
- **Docker** & **Docker Compose** (recommended)
- **Git** for version control
- **At least 2GB RAM** and **10GB disk space**
- **Internet connection**

## Installation Methods

### Method 1: Docker Compose (Recommended - Fastest)

This is the easiest and most reliable method for deployment.

#### Step 1: Clone Repository

```bash
git clone https://github.com/DARKBYTE1/GOODNESS-HIGH-SCHOOL.git
cd GOODNESS-HIGH-SCHOOL
```

#### Step 2: Configure Environment

```bash
cp .env.example .env
```

Edit `.env` file and update the following:
```
DB_PASSWORD=your-secure-password
JWT_SECRET=your-random-secret-key
SUPER_ADMIN_PASSWORD=YourSecurePassword123
PAYSTACK_SECRET=your-paystack-key
FLUTTERWAVE_SECRET=your-flutterwave-key
SMTP_PASSWORD=your-email-password
```

#### Step 3: Start Application

```bash
docker-compose up -d
```

Wait for all services to start (2-3 minutes).

#### Step 4: Run Migrations

```bash
docker-compose exec backend npm run migrate
```

#### Step 5: Seed Database (Optional)

```bash
docker-compose exec backend npm run seed
```

#### Step 6: Access Application

- **Frontend:** http://localhost:3000
- **API:** http://localhost:5000/api
- **Database:** localhost:5432
- **Redis:** localhost:6379

---

### Method 2: Manual Installation (Development)

For development or custom deployments.

#### Step 1: Install PostgreSQL

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo service postgresql start
```

**macOS:**
```bash
brew install postgresql
brew services start postgresql
```

**Windows:**
Download from: https://www.postgresql.org/download/windows/

#### Step 2: Install Redis

**Linux:**
```bash
sudo apt-get install redis-server
sudo service redis-server start
```

**macOS:**
```bash
brew install redis
brew services start redis
```

**Windows:**
Download from: https://github.com/microsoftarchive/redis/releases

#### Step 3: Clone Repository

```bash
git clone https://github.com/DARKBYTE1/GOODNESS-HIGH-SCHOOL.git
cd GOODNESS-HIGH-SCHOOL
```

#### Step 4: Setup Database

```bash
# Create database
psql -U postgres
create database goodness_sms;
\q
```

#### Step 5: Setup Backend

```bash
cd backend
cp .env.example .env
```

Edit `.env` with your database credentials:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=goodness_sms
DB_USER=postgres
DB_PASSWORD=your-password
JWT_SECRET=your-secret-key
REDIS_URL=redis://localhost:6379
```

Install dependencies and setup:
```bash
npm install
npm run migrate
npm run seed  # Optional
npm start
```

Backend will run at: http://localhost:5000

#### Step 6: Setup Frontend

In a new terminal:
```bash
cd frontend
cp .env.example .env
```

Edit `.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

Install and start:
```bash
npm install
npm start
```

Frontend will run at: http://localhost:3000

---

## Initial Setup

### 1. First Login (Super Admin)

1. Open http://localhost:3000
2. Use default credentials:
   - **Email:** superadmin@goodness-sms.com
   - **Password:** SuperAdmin@123

⚠️ **Change this password immediately!**

### 2. Configure System Settings

After login:

1. Go to **Settings > System Configuration**
2. Update:
   - Application Name
   - School Logo/Branding
   - Currency (NGN)
   - Timezone
   - Email Settings
   - SMS Gateway
   - Payment Gateway Keys

### 3. Create First School

1. Navigate to **Super Admin > Schools**
2. Click **Create New School**
3. Fill in school details:
   - School Name
   - School Code
   - School Type
   - Contact Information
   - Address

4. Assign School Administrator
5. Click **Create**

### 4. Create Admin User for School

1. Go to **User Management**
2. Click **Create New User**
3. Set role as **School Admin**
4. Assign to school created above
5. Send login credentials to admin

### 5. Configure Payment Gateways

1. Go to **Settings > Payment Gateways**
2. Add Paystack credentials
3. Add Flutterwave credentials
4. Test transactions

### 6. Configure Email/SMS

1. Go to **Settings > Email Configuration**
2. Add SMTP details
3. Test email send
4. Go to **Settings > SMS Configuration**
5. Add SMS provider credentials
6. Test SMS send

---

## Database Migration

### Run All Migrations

```bash
cd backend
npm run migrate
```

### Create New Migration

```bash
npm run migrate:create -- --name migration_name
```

### Rollback Last Migration

```bash
npm run migrate:rollback
```

---

## Backup & Restore

### Backup Database

```bash
# Using Docker
docker-compose exec postgres pg_dump -U postgres goodness_sms > backup.sql

# Direct PostgreSQL
pg_dump -U postgres -h localhost goodness_sms > backup.sql
```

### Restore Database

```bash
# Using Docker
cat backup.sql | docker-compose exec -T postgres psql -U postgres goodness_sms

# Direct PostgreSQL
psql -U postgres -h localhost goodness_sms < backup.sql
```

---

## Testing

### Run Backend Tests

```bash
cd backend
npm test
```

### Run Frontend Tests

```bash
cd frontend
npm test
```

---

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs -f backend

# Rebuild containers
docker-compose down
docker-compose up -d --build
```

### Database Connection Error

```bash
# Verify PostgreSQL is running
sudo service postgresql status

# Check connection
psql -U postgres -h localhost -d goodness_sms
```

### Port Already in Use

```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 PID
```

### Disk Space Issues

```bash
# Clean Docker
docker system prune -a

# Free space
df -h
```

---

## Performance Optimization

1. **Enable GZIP Compression**
   - Already configured in nginx.conf

2. **Redis Caching**
   - Configure in `.env`
   - Enabled by default

3. **Database Indexing**
   - Run migrations (includes indexes)
   - Monitor slow queries

4. **CDN Configuration**
   - Upload static assets to CDN
   - Configure in frontend

---

## SSL/HTTPS Setup

### Generate Self-Signed Certificate (Development)

```bash
mkdir ssl
cd ssl
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
cd ..
```

### Production SSL

1. Obtain certificate from Certificate Authority
2. Place cert.pem and key.pem in `ssl/` directory
3. Update nginx configuration
4. Restart nginx: `docker-compose restart nginx`

---

## Health Check

After installation, verify everything is working:

```bash
# Check backend
curl http://localhost:5000/api/health

# Check frontend
curl http://localhost:3000

# Check database
psql -U postgres -h localhost -d goodness_sms -c "SELECT version();"

# Check Redis
redis-cli ping
```

---

## Production Deployment

For production deployment, refer to [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Getting Help

- 📖 Read Documentation: https://docs.goodness-sms.com
- 🐛 Report Issues: https://github.com/DARKBYTE1/GOODNESS-HIGH-SCHOOL/issues
- 💬 Ask Questions: support@goodness-sms.com

---

**Version:** 1.0.0
**Last Updated:** June 2026
