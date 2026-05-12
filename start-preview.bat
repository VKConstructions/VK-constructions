@echo off
cd /d "%~dp0"
echo Building VK Constructions...
call npm.cmd run build
if errorlevel 1 (
  echo Build failed. Check the errors above.
  pause
  exit /b 1
)
echo.
echo Starting production preview on http://127.0.0.1:4199/
echo Keep this window open while viewing the site.
call npm.cmd run preview
pause
