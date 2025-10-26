// Test Email to Shreya - Gmail SMTP Test Script
// Run with: node test-email-shreya.js

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

// Test email content for Shreya
const testEmail = {
  from: 'Shreya Nail Art Studio <ssv932000@gmail.com>',
  to: 'shreyabothara04@gmail.com',
  subject: '💅 Welcome to Shreya Nail Art Studio! ✨',
  html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            padding: 40px 20px;
            text-align: center;
            color: white;
          }
          .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
          }
          .content {
            padding: 40px 30px;
          }
          .greeting {
            font-size: 20px;
            color: #c44569;
            margin-bottom: 20px;
          }
          .welcome-message {
            background-color: #fff0f5;
            border-left: 4px solid #ff6b9d;
            padding: 20px;
            margin: 25px 0;
            border-radius: 5px;
          }
          .services {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .service-item {
            display: flex;
            align-items: center;
            padding: 10px 0;
            border-bottom: 1px solid #e9ecef;
          }
          .service-item:last-child {
            border-bottom: none;
          }
          .service-emoji {
            font-size: 20px;
            margin-right: 15px;
          }
          .service-name {
            font-weight: bold;
            color: #c44569;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
            color: white;
            padding: 15px 40px;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
          }
          .footer {
            background-color: #f9f9f9;
            padding: 30px;
            text-align: center;
            color: #777;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>💅 Welcome to Shreya Nail Art Studio! ✨</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Where elegance meets creativity</p>
          </div>
          
          <div class="content">
            <div class="greeting">
              Hello Shreya! 👋
            </div>
            
            <div class="welcome-message">
              <h2 style="margin: 0 0 15px 0; color: #c44569;">🎉 Welcome to our nail salon family!</h2>
              <p style="margin: 0; font-size: 16px;">
                We're thrilled to have you as part of our beautiful community! 
                Get ready for some serious pampering and gorgeous nails! 💖
              </p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.8; color: #555; margin: 20px 0;">
              <strong>What makes us special:</strong> 🌟
            </p>
            
            <div class="services">
              <h3 style="margin: 0 0 15px 0; color: #c44569; text-align: center;">💅 Our Premium Services</h3>
              
              <div class="service-item">
                <span class="service-emoji">💅</span>
                <span class="service-name">Classic Manicure</span>
              </div>
              
              <div class="service-item">
                <span class="service-emoji">✨</span>
                <span class="service-name">Gel Manicure</span>
              </div>
              
              <div class="service-item">
                <span class="service-emoji">🦶</span>
                <span class="service-name">Pedicure</span>
              </div>
              
              <div class="service-item">
                <span class="service-emoji">🎨</span>
                <span class="service-name">Nail Art Design</span>
              </div>
              
              <div class="service-item">
                <span class="service-emoji">🧘</span>
                <span class="service-name">Spa Pedicure</span>
              </div>
            </div>
            
            <p style="font-size: 16px; line-height: 1.8; color: #555; margin: 20px 0;">
              <strong>Ready to book your appointment?</strong> 
              Our online booking system makes it super easy to schedule your perfect nail session! 
              Just pick your date, time, and service - we'll take care of the rest! 💕
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <p style="margin: 0; font-size: 18px; color: #c44569;">
                <strong>We can't wait to pamper you! 🎉</strong>
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0;">
              <strong>Shreya Nail Art Studio</strong> 💅
            </p>
            <p style="margin: 0; font-size: 12px;">
              Where elegance meets creativity ✨
            </p>
            <p style="margin: 15px 0 0 0; font-size: 12px; color: #999;">
              Questions? Contact us at ssv932000@gmail.com
            </p>
          </div>
        </div>
      </body>
    </html>
  `
};

// Send test email
async function sendTestEmail() {
  try {
    console.log('🧪 Testing Gmail SMTP for Shreya...');
    console.log('📧 Sending welcome email to: shreyabothara04@gmail.com');
    
    const result = await transporter.sendMail(testEmail);
    
    console.log('✅ Welcome email sent successfully to Shreya!');
    console.log('📨 Message ID:', result.messageId);
    console.log('📬 Check shreyabothara04@gmail.com inbox');
    console.log('💅 Beautiful nail salon welcome email delivered!');
    
  } catch (error) {
    console.error('❌ Error sending email to Shreya:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Gmail App Password');
    console.log('2. Ensure 2FA is enabled on your Google account');
    console.log('3. Verify the email address is correct');
  }
}

// Run the test
sendTestEmail();
