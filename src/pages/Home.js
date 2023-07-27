import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate=useNavigate();
  
const paperStyle={
  padding: '30px 20px',
  width: '80vw',
  position: 'relative',
  top:'10vh',
  left:'10vw'
}
  return (
    <div>
    <section className="section-one"> 
    <div className="containerhome">
      <h1 className="homehead">Star Resorts</h1>
      <p className="homepara">Indulge in Celestial Luxury at Star Resorts</p>
      <span class="home-button" onClick={() => navigate('/signin')}>Book Now</span>
    </div>  
  </section> 
 
 <section class="section-two">
    <div class="container-two">
      <div class="container-two-content content">
        <h1 className='homehead'>About Star Resorts</h1>
        <p className='homepara'>
Star Resorts is a luxurious retreat where celestial indulgence meets unparalleled hospitality. Nestled amidst picturesque landscapes, our resort offers a serene escape for travelers seeking a harmonious blend of comfort and natural beauty. Immerse yourself in a world of opulence, where every moment is designed to create cherished memories and an unforgettable stay.</p>
        <p className='homepara'>At Star Resorts, every detail is meticulously crafted to provide a seamless and delightful experience. From lavish accommodations to world-class amenities and exceptional dining, our resort ensures an ambiance of grandeur and relaxation. Whether you seek adventure or tranquility, our dedicated staff is committed to curating a personalized journey that exceeds all expectations, leaving you with a sense of celestial wonder.</p>
      </div>
      <div class="container-two-content content-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajQoXmyFs8qU8EIoiGsZKTFStO4upD7XsvQ&usqp=CAU" />
      </div>
    </div>
 </section>
 </div>
  );
}

export default Home;
