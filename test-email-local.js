// Local Gmail SMTP Test Script
// Run with: node test-email-local.js

import nodemailer from 'nodemailer';

// Your Gmail configuration
const gmailConfig = {
  user: 'ssv932000@gmail.com',
  pass: 'qwrp jzak hmck vsyt'
};

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: gmailConfig
});

// Test email content
const testEmail = {
  from: 'Shreya Nail Art Studio <ssv932000@gmail.com>',
  to: 'ssv932000@gmail.com', // Send to yourself for testing
  subject: '🧪 Local Test - Gmail SMTP Working! ✨',
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%); padding: 40px 20px; text-align: center; color: white; }
          .content { padding: 40px 30px; }
          .success { background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 20px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Gmail SMTP Test Successful!</h1>
            <p>Your email configuration is working perfectly!</p>
          </div>
          <div class="content">
            <div class="success">
              <h2>✅ Local Test Results</h2>
              <p><strong>Gmail SMTP:</strong> Working perfectly!</p>
              <p><strong>App Password:</strong> Configured correctly</p>
              <p><strong>Email Template:</strong> Beautiful HTML rendering</p>
            </div>
            <p>This test confirms that your Gmail SMTP setup is ready for production deployment!</p>
            <p><strong>Next steps:</strong></p>
            <ul>
              <li>Deploy Supabase Edge Function</li>
              <li>Deploy to Vercel</li>
              <li>Test the full booking flow</li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  `
};

// Send test email
async function sendTestEmail() {
  try {
    console.log('🧪 Testing Gmail SMTP locally...');
    console.log('📧 Sending test email to:', testEmail.to);
    
    const result = await transporter.sendMail(testEmail);
    
    console.log('✅ Test email sent successfully!');
    console.log('📨 Message ID:', result.messageId);
    console.log('📬 Check your inbox at ssv932000@gmail.com');
    
  } catch (error) {
    console.error('❌ Error sending test email:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Gmail App Password');
    console.log('2. Ensure 2FA is enabled on your Google account');
    console.log('3. Verify the email address is correct');
  }
}

// Run the test
sendTestEmail();
