import React from 'react';
import { Paper } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Offers.css";

function Offers() {
  
const paperStyle={
  padding: '30px 20px',
  width: '80vw',
  position: 'relative',
  top:'10vh',
  left:'10vw'
}
  return (
    <div>
      <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
        <div style={{ marginTop: '5vh' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Atlantiscasino.jpg" alt="Slide 1" style={{ height: "75vh" }} />
          <div className='legend'>
            <Paper elevation={20} style={{ height: "30vh", width: "30vw", paddingTop: "2vh" }}>
              <h1>Summer Days Discount at <br />Star Atlantis</h1>
            </Paper>
          </div>
        </div>
        <div style={{ marginTop: '5vh' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Federal_palace_hotel%2CVictoria_island%2CLagos.jpg" alt="Slide 2" style={{ height: "75vh" }} />
          <div className='legend'>
            <Paper elevation={20} style={{ height: "30vh", width: "30vw", paddingTop: "2vh" }}>
              <h1>Free complimentary dinner at<br />Star Palace</h1>
            </Paper>
          </div>
        </div>
        <div style={{ marginTop: '5vh' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Banff_Spring_Hotel_Alberta_Kim_Payant_02.jpg" alt="Slide 3" style={{ height: "75vh" }} />
          <div className='legend'>
            <Paper elevation={20} style={{ height: "30vh", width: "30vw", paddingTop: "2vh" }}>
              <h1>Stay for 3 night and get 1 night free at Star Royale</h1>
            </Paper>
          </div>
        </div>
      </Carousel>
      <div style={{ backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pink_sky_at_sea_beach.jpg/2560px-Pink_sky_at_sea_beach.jpg)", backgroundRepeat: "no-repeat", width:"100%",backgroundSize:"cover", height: "100vh" }}>
      <Paper style={paperStyle} elevation={10}>
            <h1>Offers in Star Resorts</h1>
            <p className='hero'>At Star Resorts, we believe in making every stay truly unforgettable, and our exclusive offers add an extra touch of magic to your experience. Enjoy special packages that cater to various preferences, from romantic getaways to family retreats.

Indulge in our seasonal promotions that include complimentary spa treatments, gourmet dining experiences, and exciting recreational activities. Whether it's a relaxing weekend escape or an adventure-filled vacation, our offers are thoughtfully curated to cater to the unique desires of each guest.

Book direct with us to avail of exclusive benefits and enjoy the epitome of hospitality at Star Resorts. Create cherished memories with your loved ones and embark on a journey of luxury, comfort, and boundless joy with our exceptional offers.</p>
</Paper>
      </div>
    </div>
  );
}

export default Offers;
