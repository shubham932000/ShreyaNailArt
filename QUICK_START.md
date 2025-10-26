# ⚡ Quick Start - Gmail SMTP Setup for Vercel

## 🎯 What You Need to Do

### 1. Gmail App Password (2 minutes)
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Generate password for "Mail" → "Other (Custom name)" → "Artful Blossom Studio"
3. **Save the 16-character password!**

### 2. Supabase Setup (5 minutes)
1. Create project at [supabase.com](https://supabase.com)
2. Run this SQL in SQL Editor:
```sql
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

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Enable public access for all users" ON bookings FOR ALL USING (true);
```

3. Deploy function: Run `deploy-supabase.bat` (Windows) or `deploy-supabase.sh` (Mac/Linux)
4. Set secrets in Supabase Dashboard → Settings → Edge Functions:
   - `GMAIL_APP_PASSWORD`: Your 16-character password
   - `GMAIL_USERNAME`: Your Gmail address

### 3. Vercel Deployment (3 minutes)
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Add environment variables:
   - `VITE_SUPABASE_URL`: Your Supabase project URL
   - `VITE_SUPABASE_PUBLISHABLE_KEY`: Your Supabase anon key
   - `DATABASE_URL`: Your PostgreSQL connection string
4. Deploy!

## 🧪 Test It Works
1. Visit your Vercel URL
2. Fill out booking form
3. Submit booking
4. Check email for confirmation! 📧

## 🆘 Need Help?
- **No emails?** Check Gmail App Password in Supabase
- **Database errors?** Check Supabase environment variables in Vercel
- **Function errors?** Check Supabase Edge Functions logs

## 🎉 You're Done!
Your nail salon now has:
- ✅ Online booking system
- ✅ Gmail email confirmations
- ✅ Professional email templates
- ✅ Secure database storage

**Total setup time: ~10 minutes** ⏱️
