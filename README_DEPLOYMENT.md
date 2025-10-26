# 🚀 Artful Blossom Studio - Deployment Guide

## Overview
This guide will help you deploy your nail salon booking system to Vercel with Gmail SMTP email functionality.

## 🎯 What You'll Get
- ✅ Beautiful nail salon website
- ✅ Online booking system
- ✅ Gmail SMTP email confirmations
- ✅ Supabase database integration
- ✅ Deployed on Vercel

## 📋 Quick Start Checklist

### 1. Gmail Setup (5 minutes)
- [ ] Enable 2-Factor Authentication on Gmail
- [ ] Generate App Password (16 characters)
- [ ] Save the password securely

### 2. Supabase Setup (10 minutes)
- [ ] Create Supabase project
- [ ] Set up database table
- [ ] Deploy Edge Function
- [ ] Configure environment variables

### 3. Vercel Deployment (5 minutes)
- [ ] Connect GitHub repository
- [ ] Set environment variables
- [ ] Deploy and test

## 🔧 Detailed Setup

### Gmail Configuration
Follow the guide in `setup-gmail.md` to:
1. Enable 2FA on your Google account
2. Generate an App Password
3. Save the 16-character password

### Supabase Configuration
1. **Create Project**: Go to [supabase.com](https://supabase.com)
2. **Database Setup**: Run the SQL from `DEPLOYMENT_GUIDE.md`
3. **Deploy Function**: Use the script in `deploy-supabase.sh`
4. **Set Secrets**: Add Gmail credentials in Supabase dashboard

### Vercel Deployment
1. **Connect Repo**: Import your GitHub repository
2. **Environment Variables**: Add Supabase URL and keys
3. **Deploy**: Click deploy and wait for completion

## 🧪 Testing Your Deployment

### Test Email Functionality
1. Visit your deployed Vercel URL
2. Fill out the booking form
3. Submit a test booking
4. Check your email for confirmation

### Troubleshooting
- **No emails**: Check Gmail App Password in Supabase
- **Database errors**: Verify Supabase environment variables
- **Function errors**: Check Supabase Edge Functions logs

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── Booking.tsx          # Main booking component
│   ├── integrations/
│   │   └── supabase/
│   │       └── client.ts        # Supabase client
│   └── pages/
│       └── Index.tsx           # Main page
├── supabase/
│   └── functions/
│       └── send-booking-confirmation/
│           └── index.ts       # Email function
├── vercel.json                 # Vercel configuration
├── env.example                 # Environment variables template
└── DEPLOYMENT_GUIDE.md         # Detailed deployment guide
```

## 🔒 Security Features

- **Row Level Security**: Enabled on database
- **App Passwords**: Secure Gmail authentication
- **Environment Variables**: No secrets in code
- **CORS Headers**: Proper cross-origin setup

## 📞 Support

If you encounter issues:
1. Check the deployment logs in Vercel
2. Verify all environment variables are set
3. Test Gmail App Password separately
4. Check Supabase Edge Functions logs

## 🎉 Success!

Once deployed, your customers can:
- Browse your nail salon services
- Book appointments online
- Receive beautiful email confirmations
- Have their bookings stored securely

Your professional nail salon booking system is now live! 💅✨
