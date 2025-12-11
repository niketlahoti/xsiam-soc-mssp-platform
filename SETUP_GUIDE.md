# 🚀 XSIAM SOC MSSP Platform - Complete Setup Guide

This guide will walk you through setting up the entire platform from scratch.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 9+ (comes with Node.js)
- **Docker** & **Docker Compose** ([Download](https://www.docker.com/))
- **Git** ([Download](https://git-scm.com/))
- **PostgreSQL** 15+ (optional if using Docker)
- **Redis** 7+ (optional if using Docker)

### Verify Installation

```bash
node --version  # Should be v18.x.x or higher
npm --version   # Should be 9.x.x or higher
docker --version
docker-compose --version
git --version
```

---

## 🎯 Quick Start (Docker - Recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git
cd xsiam-soc-mssp-platform
```

### 2. Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit .env file with your settings
nano .env  # or use your preferred editor
```

**Important Environment Variables:**

```env
# Database
DATABASE_URL=postgresql://postgres:postgres_password@postgres:5432/xsiam_mssp

# XSIAM API (Default Customer - Altisec Technologies)
XSIAM_API_URL=https://api-atpl-nfr.xdr.in.paloaltonetworks.com
XSIAM_API_ID=10
XSIAM_API_KEY=gyljBCKp2NvQRlSHwOpeAl88wL3FMQXVuyUExKyJRGLW3jg3kARRW1281WcYJpDUccjK9PKtsHvCPQozcpEOXZxkib33qrF8IReyUnnyY2gLzOO1vezbez5ULh344VyA

# AI Services
OPENAI_API_KEY=your_openai_key_here
ANTHROPIC_API_KEY=your_anthropic_key_here

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### 3. Start All Services

```bash
# Build and start all containers
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 4. Initialize Database

```bash
# Run migrations
docker-compose exec backend npm run migrate

# Seed initial data
docker-compose exec backend npm run seed
```

### 5. Access the Platform

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Health**: http://localhost:8000/health
- **Grafana**: http://localhost:3001 (admin/admin)
- **Prometheus**: http://localhost:9090

### Default Login Credentials

```
Email: admin@xsiam-mssp.com
Password: Admin@123
```

---

## 🛠️ Manual Setup (Without Docker)

### 1. Clone Repository

```bash
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git
cd xsiam-soc-mssp-platform
```

### 2. Install PostgreSQL

**macOS (Homebrew):**
```bash
brew install postgresql@15
brew services start postgresql@15
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql-15
sudo systemctl start postgresql
```

**Windows:**
Download from [PostgreSQL Official Site](https://www.postgresql.org/download/windows/)

### 3. Install Redis

**macOS (Homebrew):**
```bash
brew install redis
brew services start redis
```

**Ubuntu/Debian:**
```bash
sudo apt install redis-server
sudo systemctl start redis
```

**Windows:**
Download from [Redis Official Site](https://redis.io/download)

### 4. Create Database

```bash
# Connect to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE xsiam_mssp;

# Create user (optional)
CREATE USER xsiam_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE xsiam_mssp TO xsiam_user;

# Exit
\q
```

### 5. Configure Environment

```bash
cp .env.example .env
# Edit .env with your local settings
```

**Update these values:**
```env
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/xsiam_mssp
REDIS_URL=redis://localhost:6379
```

### 6. Install Dependencies

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend && npm install && cd ..

# Install frontend dependencies
cd frontend && npm install && cd ..

# Install AI engine dependencies
cd ai-engine && npm install && cd ..
```

### 7. Run Database Migrations

```bash
cd backend
npm run migrate
npm run seed
cd ..
```

### 8. Start Development Servers

**Option 1: Start all services together**
```bash
npm run dev
```

**Option 2: Start services separately**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

Terminal 3 - AI Engine:
```bash
cd ai-engine
npm run dev
```

Terminal 4 - Worker:
```bash
cd backend
npm run worker
```

### 9. Access the Platform

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **AI Engine**: http://localhost:8001

---

## 🔧 Configuration

### XSIAM API Setup

1. Navigate to **Settings** → **Integrations**
2. Click **Add Customer** or edit existing
3. Enter XSIAM credentials:
   - API URL
   - API ID
   - API Key
4. Click **Test Connection**
5. Save configuration

### Email Configuration

**Gmail Setup:**
1. Enable 2-Factor Authentication
2. Generate App Password
3. Use App Password in `.env`

**SMTP Settings:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

### AI Services Setup

**OpenAI:**
1. Get API key from [OpenAI Platform](https://platform.openai.com/)
2. Add to `.env`: `OPENAI_API_KEY=sk-...`

**Anthropic:**
1. Get API key from [Anthropic Console](https://console.anthropic.com/)
2. Add to `.env`: `ANTHROPIC_API_KEY=sk-ant-...`

---

## 🧪 Testing

### Run Tests

```bash
# All tests
npm test

# Backend tests
npm run test:backend

# Frontend tests
npm run test:frontend

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e

# With coverage
npm test -- --coverage
```

---

## 🚀 Production Deployment

### Build for Production

```bash
# Build all services
npm run build

# Or build individually
cd backend && npm run build
cd frontend && npm run build
cd ai-engine && npm run build
```

### Docker Production Deployment

```bash
# Use production compose file
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables for Production

```env
NODE_ENV=production
DATABASE_URL=your_production_db_url
REDIS_URL=your_production_redis_url
JWT_SECRET=generate_strong_secret_here
ENCRYPTION_KEY=generate_32_char_key_here
```

### Security Checklist

- [ ] Change default admin password
- [ ] Use strong JWT secret
- [ ] Enable HTTPS
- [ ] Configure firewall rules
- [ ] Set up backup strategy
- [ ] Enable audit logging
- [ ] Configure rate limiting
- [ ] Set up monitoring alerts

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port
lsof -i :3000  # Frontend
lsof -i :8000  # Backend

# Kill process
kill -9 <PID>
```

### Database Connection Error

```bash
# Check PostgreSQL status
sudo systemctl status postgresql

# Restart PostgreSQL
sudo systemctl restart postgresql

# Check connection
psql -U postgres -h localhost
```

### Redis Connection Error

```bash
# Check Redis status
redis-cli ping  # Should return PONG

# Restart Redis
sudo systemctl restart redis
```

### Docker Issues

```bash
# Stop all containers
docker-compose down

# Remove volumes
docker-compose down -v

# Rebuild
docker-compose build --no-cache

# Start fresh
docker-compose up -d
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear npm cache
npm cache clean --force
```

---

## 📚 Additional Resources

- [API Documentation](docs/API.md)
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Development Guide](docs/DEVELOPMENT.md)
- [Security Guide](docs/SECURITY.md)
- [User Guide](docs/USER_GUIDE.md)

---

## 🆘 Getting Help

- **Issues**: [GitHub Issues](https://github.com/niketlahoti/xsiam-soc-mssp-platform/issues)
- **Discussions**: [GitHub Discussions](https://github.com/niketlahoti/xsiam-soc-mssp-platform/discussions)
- **Email**: support@example.com

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Frontend loads at http://localhost:3000
- [ ] Backend API responds at http://localhost:8000/health
- [ ] Database connection successful
- [ ] Redis connection successful
- [ ] Can login with default credentials
- [ ] XSIAM API connection test passes
- [ ] Email sending works (test)
- [ ] AI analysis triggers successfully

---

**🎉 Congratulations! Your XSIAM SOC MSSP Platform is ready!**

Start by logging in and exploring the dashboards.
