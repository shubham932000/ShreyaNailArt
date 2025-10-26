# 🧪 Local Gmail SMTP Testing Guide

## Quick Test Setup

### 1. Install Dependencies
```bash
npm install nodemailer @types/nodemailer
```

### 2. Run Local Email Test
```bash
npm run test:email
```

### 3. Check Your Email
- Open `ssv932000@gmail.com`
- Look for the test email with subject "🧪 Local Test - Gmail SMTP Working! ✨"
- Verify the beautiful HTML template is rendering correctly

## What the Test Does

✅ **Tests Gmail SMTP Connection**
- Verifies your App Password works
- Confirms SMTP server connection
- Tests email sending functionality

✅ **Tests Email Template**
- Sends a beautiful HTML email
- Uses your nail salon branding
- Confirms template rendering

✅ **Validates Configuration**
- Checks Gmail credentials
- Tests email formatting
- Verifies delivery

## Expected Results

### ✅ Success
You should see:
```
🧪 Testing Gmail SMTP locally...
📧 Sending test email to: ssv932000@gmail.com
✅ Test email sent successfully!
📨 Message ID: <message-id>
📬 Check your inbox at ssv932000@gmail.com
```

### ❌ If It Fails
Common issues and solutions:

**"Invalid credentials"**
- Double-check your Gmail App Password
- Ensure 2FA is enabled on your Google account
- Verify the email address is correct

**"Connection timeout"**
- Check your internet connection
- Verify Gmail SMTP settings
- Try again in a few minutes

## 🎯 What This Proves

If the test passes, you can be confident that:
- ✅ Your Gmail SMTP is working perfectly
- ✅ Your App Password is correct
- ✅ Email templates will render beautifully
- ✅ Production deployment will work

## 🚀 Next Steps After Successful Test

1. **Deploy Supabase Function** - Your SMTP is ready!
2. **Deploy to Vercel** - Everything will work in production
3. **Test Full Booking Flow** - End-to-end testing

## 🔧 Troubleshooting

If you encounter issues:
1. Check the error message carefully
2. Verify your Gmail App Password
3. Ensure 2FA is enabled
4. Try generating a new App Password if needed

Your local test confirms that your Gmail SMTP setup is production-ready! 🎉
