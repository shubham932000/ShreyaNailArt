import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  bookingDate: string;
  bookingTime: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, bookingDate, bookingTime }: BookingEmailRequest = await req.json();

    console.log("Sending booking confirmation to:", email);

    const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD");
    const GMAIL_USERNAME = Deno.env.get("GMAIL_USERNAME") || "ssv932000@gmail.com";
    
    if (!GMAIL_APP_PASSWORD) {
      throw new Error("GMAIL_APP_PASSWORD environment variable is not set");
    }
    
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.gmail.com",
        port: 465,
        tls: true,
        auth: {
          username: GMAIL_USERNAME,
          password: GMAIL_APP_PASSWORD,
        },
      },
    });

    const htmlContent = `<!DOCTYPE html>
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
              .booking-details {
                background-color: #fff0f5;
                border-left: 4px solid #ff6b9d;
                padding: 20px;
                margin: 25px 0;
                border-radius: 5px;
              }
              .detail-row {
                display: flex;
                padding: 10px 0;
                border-bottom: 1px solid #ffe4ef;
              }
              .detail-row:last-child {
                border-bottom: none;
              }
              .detail-label {
                font-weight: bold;
                color: #c44569;
                min-width: 120px;
              }
              .detail-value {
                color: #333;
              }
              .message {
                font-size: 16px;
                line-height: 1.8;
                color: #555;
                margin: 20px 0;
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
              .emoji {
                font-size: 24px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Booking Confirmed! ✨</h1>
                <p style="margin: 10px 0 0 0; font-size: 16px;">We can't wait to pamper you! 💅</p>
              </div>
              
              <div class="content">
                <div class="greeting">
                  Hey ${name}! 👋
                </div>
                
                <p class="message">
                  <strong>Amazing news!</strong> 🎊 Your nail appointment is all set and we're SO excited to see you! 
                  Get ready for some serious pampering and gorgeous nails! 💖
                </p>
                
                <div class="booking-details">
                  <div style="text-align: center; margin-bottom: 15px;">
                    <span class="emoji">📅</span>
                    <h2 style="margin: 10px 0; color: #c44569;">Your Appointment Details</h2>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">💅 Service:</span>
                    <span class="detail-value">${service}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">📅 Date:</span>
                    <span class="detail-value">${new Date(bookingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">⏰ Time:</span>
                    <span class="detail-value">${bookingTime}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">📧 Email:</span>
                    <span class="detail-value">${email}</span>
                  </div>
                  
                  <div class="detail-row">
                    <span class="detail-label">📱 Phone:</span>
                    <span class="detail-value">${phone}</span>
                  </div>
                </div>
                
                <p class="message">
                  <strong>What to expect:</strong> 🌟
                  <br>
                  ✨ Premium quality products<br>
                  💆 Relaxing and comfortable environment<br>
                  🎨 Expert nail artistry<br>
                  😊 Friendly and professional service
                </p>
                
                <p class="message">
                  <strong>Need to reschedule?</strong> No worries! Just give us a call or reply to this email. 
                  We're here to help! 💕
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <p style="margin: 0; font-size: 18px; color: #c44569;">
                    <strong>See you soon! 🎉</strong>
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
                  If you have any questions, feel free to contact us at ssv93000@gmail.com
                </p>
              </div>
            </div>
          </body>
        </html>`;

    await client.send({
      from: `Shreya Nail Art Studio <${GMAIL_USERNAME}>`,
      to: email,
      subject: "🎉 Your Nail Appointment is Confirmed! ✨",
      content: "auto",
      html: htmlContent,
    });

    await client.close();

    console.log("Email sent successfully to:", email);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
