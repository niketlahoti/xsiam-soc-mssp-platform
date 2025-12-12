@echo off
REM XSIAM SOC MSSP Platform - Windows Setup Script
REM This script automates the setup process on Windows

echo.
echo ========================================
echo   XSIAM SOC MSSP Platform Setup
echo   Windows Installation Script
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker is not installed!
    echo Please install Docker Desktop from: https://www.docker.com/products/docker-desktop/
    pause
    exit /b 1
)

echo [OK] Docker is installed
echo.

REM Check if docker-compose is available
docker-compose --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Docker Compose is not available!
    echo Please ensure Docker Desktop is running.
    pause
    exit /b 1
)

echo [OK] Docker Compose is available
echo.

REM Check if .env file exists
if not exist .env (
    echo [INFO] Creating .env file from template...
    copy .env.example .env
    echo [OK] .env file created
    echo.
    echo [IMPORTANT] Please edit .env file with your configuration:
    echo   - XSIAM API credentials
    echo   - OpenAI/Anthropic API keys
    echo   - Email SMTP settings
    echo.
    echo Press any key to open .env file in Notepad...
    pause >nul
    notepad .env
) else (
    echo [OK] .env file already exists
)

echo.
echo ========================================
echo   Starting Docker Services
echo ========================================
echo.

REM Start Docker services
echo [INFO] Starting all services with Docker Compose...
docker-compose up -d

if %errorlevel% neq 0 (
    echo [ERROR] Failed to start Docker services!
    echo Please check Docker Desktop is running and try again.
    pause
    exit /b 1
)

echo [OK] Docker services started successfully
echo.

REM Wait for services to be ready
echo [INFO] Waiting for services to be ready (30 seconds)...
timeout /t 30 /nobreak >nul

echo.
echo ========================================
echo   Initializing Database
echo ========================================
echo.

REM Run database migrations
echo [INFO] Running database migrations...
docker-compose exec -T backend npm run migrate

if %errorlevel% neq 0 (
    echo [WARNING] Migration failed. Database might already be initialized.
)

echo.
echo [INFO] Seeding initial data...
docker-compose exec -T backend npm run seed

if %errorlevel% neq 0 (
    echo [WARNING] Seeding failed. Data might already exist.
)

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo The XSIAM SOC MSSP Platform is now running!
echo.
echo Access the platform:
echo   Frontend:  http://localhost:3000
echo   Backend:   http://localhost:8000
echo   Grafana:   http://localhost:3001
echo.
echo Default Login Credentials:
echo   Email:     admin@xsiam-mssp.com
echo   Password:  Admin@123
echo.
echo Useful Commands:
echo   View logs:     docker-compose logs -f
echo   Stop services: docker-compose down
echo   Restart:       docker-compose restart
echo.
echo Press any key to open the platform in your browser...
pause >nul

REM Open browser
start http://localhost:3000

echo.
echo Thank you for using XSIAM SOC MSSP Platform!
echo.
pause
