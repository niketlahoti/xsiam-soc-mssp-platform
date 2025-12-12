@echo off
REM Quick start script for Windows

echo.
echo Starting XSIAM SOC MSSP Platform...
echo.

docker-compose up -d

if %errorlevel% neq 0 (
    echo [ERROR] Failed to start services!
    echo Make sure Docker Desktop is running.
    pause
    exit /b 1
)

echo.
echo Platform started successfully!
echo.
echo Access at: http://localhost:3000
echo.

timeout /t 3 /nobreak >nul
start http://localhost:3000
