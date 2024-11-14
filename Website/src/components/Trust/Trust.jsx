import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Trust.css';
import image1 from './trustimg/image1.jpg';
import image2 from './trustimg/image2.jpg'
import image3 from './trustimg/image3.jpg'
import charity from './trustimg/donation.png'
import Qr from './trustimg/Qr Code.jpg'
import donate from './trustimg/donate logo.jpg'
function Trust() {
  // Array of image URLs for the carousel
  const patientImages = [
    { src: image1, alt: 'Aasif in hospital 1' },
    { src: image2, alt: 'Aasif in hospital 2' },
    { src: image3, alt: 'Aasif in hospital 3' }
  ];

  return (
    <div className="foundation-page">
      {/* Foundation Information Section */}
      <section className="foundation-info">
        
        <div className='donation-content'><h1 className='foundation-heading'>Habulus Foundation</h1>
        <p className="foundation-description" style={{color:'#154166'}}>
          The Story of Habulus Foundation and a Legacy of Hope and Generosity
        </p>
        <p>
        The Habulus Foundation, established in 2023, was created with a mission to make a meaningful difference in the lives of people facing various challenges. In its first year, the foundation has supported over 15 individuals, helping them overcome obstacles and achieve their goals without the worry of financial burdens. Every contribution made by the Habulus Foundation reflects a strong commitment to uplifting communities and building a brighter future. Through this support, individuals have found new paths to success, sparking inspiration and hope for others around them. 
        <br />
        Beyond its initial efforts, the foundation has extended its reach to offer compassionate assistance to many others in need. Whether providing essential resources or financial aid for urgent matters, Habulus Foundation has helped people overcome difficulties that once felt insurmountable. Their work is more than financial support; it’s a beacon of hope and a reminder that compassionate communities have the power to lift individuals in times of hardship. With each initiative, the foundation continues to grow its impact, dedicated to enhancing lives and empowering those it touches.
        </p></div>
        
        <img src={charity} alt="Charity" className="charity-image" />
      </section>

      {/* Donation Section with Carousel */}
      <section className="donation-section">
        <div className="donation-box ">
          <h2>Support Aasif To Recover From T-Lymphoblastic Lymphoma (Cancer)</h2>
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              autoPlay={true}
              interval={3000}
            >
              {patientImages.map((image, index) => (
                <div key={index} className='img-container'>
                  <img src={image.src} alt={image.alt} className="patient-image" />
                </div>
              ))}
            </Carousel>
        </div>
        <div className='donation-gateway'>
            <div className="logo">
              <img className="donate_logo" src={donate} alt="donate logo" />
              <h1>Donate</h1>
            </div>
            <div className="qr-code">
              <img src={Qr} alt="QR Code" />
            </div>
            <p className="donate-instructions">Or donate using any app</p>
            <a href="upi://pay?pa=kishoreselvaraj2004@oksbi&cu=INR&am=100" target="_blank">
              <button className="donate-button">Donate Now</button>
            </a>
            
            <div className="social-icons">
              {/* Add social media icons here */}
            </div>
          </div>
      </section>

      {/* Verification Section */}
      <section className="verification-section">
        <h3>Verification</h3>
        <ul>
          <li>Supporting documents: <span className="verified">Verified</span> (Verification: Bills, Patient letter)</li>
          <li>Medical cause: <span className="verified">Verified</span> (Verification with CMC Hospital, Vellore, Tamil Nadu)</li>
          <li>KYC documents: <span className="verified">Verified</span> (ID proof & bank details)</li>
          <li>Fund utilization: <span className="verified">Verified</span> (Transferred as per bills)</li>
        </ul>
      </section>
    </div>
  );
}

export default Trust;
