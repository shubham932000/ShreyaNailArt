#!/bin/bash

# Deploy Supabase Edge Functions
# Make sure you have Supabase CLI installed: npm install -g supabase

echo "🚀 Deploying Supabase Edge Functions..."

# Check if supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "❌ Supabase CLI not found. Please install it first:"
    echo "npm install -g supabase"
    exit 1
fi

# Login to Supabase (if not already logged in)
echo "🔐 Logging in to Supabase..."
supabase login

# Link to your project (replace with your project reference)
echo "🔗 Linking to Supabase project..."
echo "Please run: supabase link --project-ref YOUR_PROJECT_REF"
echo "You can find your project reference in your Supabase dashboard URL"

# Deploy the function
echo "📦 Deploying send-booking-confirmation function..."
supabase functions deploy send-booking-confirmation

echo "✅ Deployment complete!"
echo ""
echo "🔧 Don't forget to set your environment variables in Supabase:"
echo "1. Go to your Supabase Dashboard → Settings → Edge Functions"
echo "2. Add these secrets:"
echo "   - GMAIL_APP_PASSWORD: Your 16-character Gmail app password"
echo "   - GMAIL_USERNAME: Your Gmail address"
echo ""
echo "📧 Test your email functionality after deployment!"
