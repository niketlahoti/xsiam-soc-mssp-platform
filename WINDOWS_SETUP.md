# 🪟 Windows Setup Guide

Complete guide for running XSIAM SOC MSSP Platform on Windows.

---

## 🎯 Recommended: Docker Desktop

### Prerequisites
- Windows 10/11 (64-bit)
- At least 8GB RAM
- Virtualization enabled in BIOS

### Step-by-Step Installation

#### 1. Install Docker Desktop

1. Download Docker Desktop:
   - Visit: https://www.docker.com/products/docker-desktop/
   - Click "Download for Windows"

2. Run the installer:
   - Double-click `Docker Desktop Installer.exe`
   - Follow installation wizard
   - Enable WSL 2 if prompted
   - Restart computer when asked

3. Verify installation:
   ```powershell
   docker --version
   docker-compose --version
   ```

#### 2. Install Git (if not installed)

1. Download Git for Windows:
   - Visit: https://git-scm.com/download/win
   - Run installer with default options

2. Verify:
   ```powershell
   git --version
   ```

#### 3. Clone and Run

```powershell
# Open PowerShell (Right-click Start → Windows PowerShell)

# Clone repository
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git

# Navigate to directory
cd xsiam-soc-mssp-platform

# Copy environment file
copy .env.example .env

# Edit .env file (use Notepad)
notepad .env

# Start all services
docker-compose up -d

# Wait 30 seconds for services to start, then initialize database
docker-compose exec backend npm run migrate
docker-compose exec backend npm run seed
```

#### 4. Access the Platform

Open your browser and go to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/health

**Default Login:**
- Email: `admin@xsiam-mssp.com`
- Password: `Admin@123`

---

## 🛠️ Alternative: Native Windows Installation

### Prerequisites

1. **Node.js 18+**
   - Download: https://nodejs.org/
   - Choose "LTS" version
   - During installation, check "Add to PATH"

2. **PostgreSQL 15+**
   - Download: https://www.postgresql.org/download/windows/
   - Run installer
   - Set password for `postgres` user (remember this!)
   - Port: 5432 (default)
   - Install pgAdmin 4 (included)

3. **Redis Alternative - Memurai**
   - Download: https://www.memurai.com/get-memurai
   - Free for development
   - Or use Redis in Docker: `docker run -d -p 6379:6379 redis:7-alpine`

### Installation Steps

#### 1. Verify Prerequisites

```powershell
# Open PowerShell
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
psql --version    # Should show PostgreSQL 15.x
```

#### 2. Create Database

```powershell
# Open Command Prompt or PowerShell
psql -U postgres

# In PostgreSQL prompt:
CREATE DATABASE xsiam_mssp;
\q
```

#### 3. Clone and Setup

```powershell
# Clone repository
git clone https://github.com/niketlahoti/xsiam-soc-mssp-platform.git
cd xsiam-soc-mssp-platform

# Install dependencies
npm install

# Copy environment file
copy .env.example .env
```

#### 4. Configure Environment

Edit `.env` file (use Notepad or VS Code):

```env
# Database (Update with your PostgreSQL password)
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/xsiam_mssp

# Redis (if using Memurai)
REDIS_URL=redis://localhost:6379

# Or if Redis is not available, comment out Redis URL
# REDIS_URL=

# Rest of the configuration...
```

#### 5. Run Database Migrations

```powershell
cd backend
npm run migrate
npm run seed
cd ..
```

#### 6. Start Development Servers

**Option A: All at once (requires concurrently)**
```powershell
npm run dev
```

**Option B: Separate terminals (Recommended for Windows)**

Terminal 1 - Backend:
```powershell
cd backend
npm run dev
```

Terminal 2 - Frontend:
```powershell
cd frontend
npm run dev
```

Terminal 3 - AI Engine:
```powershell
cd ai-engine
npm run dev
```

---

## 🐛 Common Windows Issues & Solutions

### Issue 1: "npm: command not found"

**Solution:**
```powershell
# Add Node.js to PATH manually
# 1. Search "Environment Variables" in Windows
# 2. Edit "Path" variable
# 3. Add: C:\Program Files\nodejs\
# 4. Restart PowerShell
```

### Issue 2: PostgreSQL Connection Failed

**Solution:**
```powershell
# Check if PostgreSQL is running
# Open Services (services.msc)
# Find "postgresql-x64-15"
# Right-click → Start

# Or use pgAdmin 4 to verify connection
```

### Issue 3: Port Already in Use

**Solution:**
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID with actual number)
taskkill /PID <PID> /F

# Or change port in .env:
# APP_PORT=3001
```

### Issue 4: Docker Desktop Not Starting

**Solution:**
1. Enable Virtualization in BIOS
2. Enable Hyper-V:
   ```powershell
   # Run as Administrator
   Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
   ```
3. Restart computer

### Issue 5: Permission Denied Errors

**Solution:**
```powershell
# Run PowerShell as Administrator
# Right-click PowerShell → "Run as Administrator"
```

### Issue 6: Line Ending Issues (CRLF vs LF)

**Solution:**
```powershell
# Configure Git to handle line endings
git config --global core.autocrlf true
```

---

## 📝 Windows-Specific Commands

### PowerShell Commands

```powershell
# View running Docker containers
docker ps

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Restart services
docker-compose restart

# Access backend shell
docker-compose exec backend sh

# Access database
docker-compose exec postgres psql -U postgres -d xsiam_mssp
```

### Command Prompt Commands

```cmd
# Same as PowerShell, but use 'copy' instead of 'cp'
copy .env.example .env

# View directory contents
dir

# Change directory
cd backend
```

---

## 🎨 Recommended Tools for Windows

### Code Editors
- **VS Code** (Recommended): https://code.visualstudio.com/
  - Install extensions: ESLint, Prettier, Docker
- **WebStorm**: https://www.jetbrains.com/webstorm/

### Database Tools
- **pgAdmin 4** (comes with PostgreSQL)
- **DBeaver**: https://dbeaver.io/
- **TablePlus**: https://tableplus.com/

### API Testing
- **Postman**: https://www.postman.com/
- **Insomnia**: https://insomnia.rest/

### Terminal
- **Windows Terminal**: https://aka.ms/terminal (Recommended)
- **PowerShell 7**: https://github.com/PowerShell/PowerShell

---

## 🚀 Performance Tips for Windows

1. **Use SSD** for better Docker performance
2. **Allocate more RAM** to Docker Desktop (Settings → Resources)
3. **Enable WSL 2** backend in Docker Desktop
4. **Exclude project folder** from Windows Defender scanning
5. **Use Windows Terminal** for better experience

---

## 📊 System Requirements

### Minimum
- Windows 10/11 (64-bit)
- 8GB RAM
- 20GB free disk space
- Dual-core processor

### Recommended
- Windows 11 (64-bit)
- 16GB RAM
- 50GB free SSD space
- Quad-core processor
- Virtualization enabled

---

## ✅ Verification Checklist

After setup, verify everything works:

```powershell
# Check services
docker-compose ps

# Test backend
curl http://localhost:8000/health

# Test frontend
# Open browser: http://localhost:3000

# Test database connection
docker-compose exec postgres psql -U postgres -d xsiam_mssp -c "SELECT 1;"

# Test Redis
docker-compose exec redis redis-cli ping
```

Expected outputs:
- Backend health: `{"status":"healthy",...}`
- Database: `1`
- Redis: `PONG`

---

## 🆘 Getting Help

If you encounter issues:

1. **Check Docker Desktop logs**
   - Open Docker Desktop → Troubleshoot → View logs

2. **Check application logs**
   ```powershell
   docker-compose logs backend
   docker-compose logs frontend
   ```

3. **GitHub Issues**
   - https://github.com/niketlahoti/xsiam-soc-mssp-platform/issues

4. **Common Issues**
   - See troubleshooting section above

---

## 🎉 Success!

Once everything is running:
1. Open http://localhost:3000
2. Login with default credentials
3. Explore the platform!

**Welcome to XSIAM SOC MSSP Platform on Windows! 🪟**
