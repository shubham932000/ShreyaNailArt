# 🔐 Your Complete Configuration

## ✅ Gmail SMTP Settings
- **Gmail Address**: `ssv932000@gmail.com`
- **App Password**: `qwrp jzak hmck vsyt`
- **SMTP Server**: `smtp.gmail.com:465`

## ✅ Database Connection
- **Connection String**: `postgresql://postgres:Shubham@2k00@db.jhtxqrloaevmutrrruwm.supabase.co:5432/postgres`

## 🚀 Ready for Deployment!

### Supabase Edge Function Secrets
Add these in your Supabase Dashboard → Settings → Edge Functions:
```
GMAIL_APP_PASSWORD=qwrp jzak hmck vsyt
GMAIL_USERNAME=ssv932000@gmail.com
```

### Vercel Environment Variables
Add these in your Vercel Dashboard → Project Settings → Environment Variables:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
DATABASE_URL=postgresql://postgres:Shubham@2k00@db.jhtxqrloaevmutrrruwm.supabase.co:5432/postgres
```

## 🎯 What's Left to Do:

1. **Deploy Supabase Function** (5 minutes)
   - Run `deploy-supabase.bat` (Windows) or `deploy-supabase.sh` (Mac/Linux)
   - Set the secrets above in Supabase dashboard

2. **Deploy to Vercel** (3 minutes)
   - Connect your GitHub repository
   - Add the environment variables above
   - Deploy!

3. **Test** (1 minute)
   - Visit your Vercel URL
   - Make a test booking
   - Check your email! 📧

## 🎉 You're Almost There!
Your Gmail SMTP is fully configured and ready to send beautiful booking confirmations!
