# 📧 Gmail SMTP Setup Guide

## Step-by-Step Gmail App Password Configuration

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Click on "2-Step Verification"
3. Follow the setup process if not already enabled

### 2. Generate App Password
1. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
2. You might need to sign in again
3. Select "Mail" from the dropdown
4. Select "Other (Custom name)" from the device dropdown
5. Enter "Artful Blossom Studio" as the name
6. Click "Generate"
7. **IMPORTANT**: Copy the 16-character password immediately (you won't see it again!)

### 3. Configure Supabase Secrets
1. Go to your Supabase Dashboard
2. Navigate to Settings → Edge Functions
3. Add these secrets:
   - **GMAIL_APP_PASSWORD**: Paste your 16-character app password
   - **GMAIL_USERNAME**: Your Gmail address (e.g., ssv932000@gmail.com)

### 4. Database Connection
Your PostgreSQL connection string is:
```
postgresql://postgres:Shubham@2k00@db.jhtxqrloaevmutrrruwm.supabase.co:5432/postgres
```
This is your actual database connection string ready to use.

### 5. Test Configuration
After setting up, test by:
1. Deploying your Supabase function
2. Making a test booking on your site
3. Checking if the confirmation email is received

## 🔒 Security Notes

- **Never use your main Gmail password** for SMTP
- **Keep your App Password secure** - treat it like a password
- **App Passwords are per-account** - each Gmail account needs its own
- **You can revoke App Passwords** anytime from the same Google page

## 🚨 Troubleshooting

### "Invalid credentials" error
- Double-check the App Password (16 characters, no spaces)
- Ensure 2FA is enabled on your Google account
- Verify the Gmail address is correct

### "Less secure app access" error
- This shouldn't happen with App Passwords
- Make sure you're using App Password, not your regular password

### Emails not sending
- Check Supabase Edge Functions logs
- Verify the secrets are set correctly
- Test the SMTP connection separately

## 📞 Need Help?

If you're still having issues:
1. Check the Supabase Edge Functions logs
2. Verify all environment variables are set
3. Test with a simple email first
4. Make sure your Gmail account allows "less secure apps" (though App Passwords should work regardless)
