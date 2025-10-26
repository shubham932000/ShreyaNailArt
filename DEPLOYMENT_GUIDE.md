# 🚀 Vercel Deployment Guide for Artful Blossom Studio

This guide will help you deploy your nail salon booking system to Vercel with Gmail SMTP functionality.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Supabase Project**: Set up at [supabase.com](https://supabase.com)
3. **Gmail Account**: For sending emails
4. **GitHub Repository**: Your code should be in a GitHub repo

## 🔧 Step 1: Gmail App Password Setup

### Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled

### Generate App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Enter "Artful Blossom Studio" as the name
4. Copy the generated 16-character password (save this securely!)

## 🗄️ Step 2: Supabase Setup

### Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your:
   - Project URL
   - Anon/Public Key
   - Service Role Key

### Database Setup
Run this SQL in your Supabase SQL Editor:

```sql
-- Create bookings table
CREATE TABLE bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for public access
CREATE POLICY "Enable public access for all users" ON bookings
FOR ALL USING (true);
```

### Deploy Edge Function
1. Install Supabase CLI: `npm install -g supabase`
2. Login: `supabase login`
3. Link project: `supabase link --project-ref YOUR_PROJECT_REF`
4. Deploy function: `supabase functions deploy send-booking-confirmation`

### Set Environment Variables in Supabase
1. Go to your Supabase Dashboard → Settings → Edge Functions
2. Add these secrets:
   - `GMAIL_APP_PASSWORD`: Your 16-character app password
   - `GMAIL_USERNAME`: Your Gmail address (e.g., ssv932000@gmail.com)

## 🚀 Step 3: Vercel Deployment

### Connect Repository
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Select the repository containing your code

### Configure Environment Variables
In Vercel Dashboard → Project Settings → Environment Variables, add:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
DATABASE_URL=postgresql://postgres:Shubham@2k00@db.jhtxqrloaevmutrrruwm.supabase.co:5432/postgres
```

### Deploy
1. Click "Deploy" in Vercel
2. Wait for deployment to complete
3. Your site will be available at `https://your-project.vercel.app`

## 🧪 Step 4: Testing

### Test Email Functionality
1. Visit your deployed site
2. Fill out the booking form
3. Submit the booking
4. Check your email for the confirmation

### Troubleshooting
- **Email not sending**: Check Gmail App Password in Supabase secrets
- **Database errors**: Verify Supabase environment variables in Vercel
- **Function errors**: Check Supabase Edge Functions logs

## 🔒 Security Best Practices

1. **Never commit secrets**: Use environment variables
2. **Use App Passwords**: Never use your main Gmail password
3. **Enable RLS**: Row Level Security is enabled on your database
4. **Regular updates**: Keep dependencies updated

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Supabase Edge Functions logs
3. Verify all environment variables are set correctly
4. Test Gmail App Password separately

## 🎉 Success!

Once deployed, your nail salon booking system will:
- ✅ Accept online bookings
- ✅ Send beautiful confirmation emails
- ✅ Store bookings in Supabase database
- ✅ Work seamlessly on Vercel

Your customers can now book appointments and receive professional email confirmations!
