@echo off
echo 🚀 Deploying Supabase Edge Functions...

REM Check if supabase CLI is installed
where supabase >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Supabase CLI not found. Please install it first:
    echo npm install -g supabase
    pause
    exit /b 1
)

echo 🔐 Logging in to Supabase...
supabase login

echo 🔗 Linking to Supabase project...
echo Please run: supabase link --project-ref YOUR_PROJECT_REF
echo You can find your project reference in your Supabase dashboard URL

echo 📦 Deploying send-booking-confirmation function...
supabase functions deploy send-booking-confirmation

echo ✅ Deployment complete!
echo.
echo 🔧 Don't forget to set your environment variables in Supabase:
echo 1. Go to your Supabase Dashboard → Settings → Edge Functions
echo 2. Add these secrets:
echo    - GMAIL_APP_PASSWORD: Your 16-character Gmail app password
echo    - GMAIL_USERNAME: Your Gmail address
echo.
echo 📧 Test your email functionality after deployment!
pause
