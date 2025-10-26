const EmailPreview = () => {
  // Sample data for preview
  const sampleData = {
    name: "Shubham Vishwakarma",
    email: "shubhamvishwakarma2k0@gmail.com",
    phone: "1231234123",
    service: "Luxury Gel Nails",
    bookingDate: "2025-10-29",
    bookingTime: "10:00"
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">Email Preview</h1>
          <p className="text-muted-foreground mb-4">
            This is how the booking confirmation email looks when sent to customers.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div style={{
            background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
            padding: '40px 20px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
              ✨ Booking Confirmed! ✨
            </h1>
            <p style={{ margin: '10px 0 0 0', fontSize: '16px' }}>
              We can't wait to pamper you! 💅
            </p>
          </div>
          
          <div style={{ padding: '40px 30px' }}>
            <div style={{ fontSize: '20px', color: '#c44569', marginBottom: '20px' }}>
              Hey {sampleData.name}! 👋
            </div>
            
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', margin: '20px 0' }}>
              <strong>Amazing news!</strong> 🎊 Your nail appointment is all set and we're SO excited to see you! 
              Get ready for some serious pampering and gorgeous nails! 💖
            </p>
            
            <div style={{
              backgroundColor: '#fff0f5',
              borderLeft: '4px solid #ff6b9d',
              padding: '20px',
              margin: '25px 0',
              borderRadius: '5px'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '24px' }}>📅</span>
                <h2 style={{ margin: '10px 0', color: '#c44569' }}>Your Appointment Details</h2>
              </div>
              
              <div style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ffe4ef' }}>
                <span style={{ fontWeight: 'bold', color: '#c44569', minWidth: '120px' }}>💅 Service:</span>
                <span style={{ color: '#333' }}>{sampleData.service}</span>
              </div>
              
              <div style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ffe4ef' }}>
                <span style={{ fontWeight: 'bold', color: '#c44569', minWidth: '120px' }}>📅 Date:</span>
                <span style={{ color: '#333' }}>
                  {new Date(sampleData.bookingDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              
              <div style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ffe4ef' }}>
                <span style={{ fontWeight: 'bold', color: '#c44569', minWidth: '120px' }}>⏰ Time:</span>
                <span style={{ color: '#333' }}>{sampleData.bookingTime}</span>
              </div>
              
              <div style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid #ffe4ef' }}>
                <span style={{ fontWeight: 'bold', color: '#c44569', minWidth: '120px' }}>📧 Email:</span>
                <span style={{ color: '#333' }}>{sampleData.email}</span>
              </div>
              
              <div style={{ display: 'flex', padding: '10px 0' }}>
                <span style={{ fontWeight: 'bold', color: '#c44569', minWidth: '120px' }}>📱 Phone:</span>
                <span style={{ color: '#333' }}>{sampleData.phone}</span>
              </div>
            </div>
            
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', margin: '20px 0' }}>
              <strong>What to expect:</strong> 🌟
              <br />
              ✨ Premium quality products<br />
              💆 Relaxing and comfortable environment<br />
              🎨 Expert nail artistry<br />
              😊 Friendly and professional service
            </p>
            
            <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', margin: '20px 0' }}>
              <strong>Need to reschedule?</strong> No worries! Just give us a call or reply to this email. 
              We're here to help! 💕
            </p>
            
            <div style={{ textAlign: 'center', margin: '30px 0' }}>
              <p style={{ margin: 0, fontSize: '18px', color: '#c44569' }}>
                <strong>See you soon! 🎉</strong>
              </p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: '#f9f9f9',
            padding: '30px',
            textAlign: 'center',
            color: '#777',
            fontSize: '14px'
          }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Artistry Perfected Nail Salon</strong> 💅
            </p>
            <p style={{ margin: 0, fontSize: '12px' }}>
              Where elegance meets creativity ✨
            </p>
            <p style={{ margin: '15px 0 0 0', fontSize: '12px', color: '#999' }}>
              If you have any questions, feel free to contact us at ssv93000@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
