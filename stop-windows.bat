@echo off
REM Stop script for Windows

echo.
echo Stopping XSIAM SOC MSSP Platform...
echo.

docker-compose down

if %errorlevel% neq 0 (
    echo [ERROR] Failed to stop services!
    pause
    exit /b 1
)

echo.
echo Platform stopped successfully!
echo.
pause
