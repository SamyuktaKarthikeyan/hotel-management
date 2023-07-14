import React from 'react';
import { Paper } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Home.css"
function Home() {
  return (
    <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Atlantiscasino.jpg" alt="Slide 1" style={{height:"75vh"}}/>
        <div className='legend'>
         <Paper elevation={20} style={{height:"30vh", width:"30vw", paddingTop:"2vh"}}>
          <h1>Enjoy the rooftop sunrise at <br/>Star Atlantis</h1>
         </Paper>
        </div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Federal_palace_hotel%2CVictoria_island%2CLagos.jpg" alt="Slide 2" style={{height:"75vh"}}/>
        <div className='legend'>
         <Paper elevation={20} style={{height:"30vh", width:"30vw", paddingTop:"2vh"}}>
          <h1>Rule the seas from the Majestic <br/>Star Palace</h1>
         </Paper>
        </div>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Banff_Spring_Hotel_Alberta_Kim_Payant_02.jpg" alt="Slide 3" style={{height:"75vh"}}/>
        <div className='legend'>
         <Paper elevation={20} style={{height:"30vh", width:"30vw", paddingTop:"2vh"}}>
          <h1>Savour the chill breeze at<br/>Star Royale</h1>
         </Paper>
        </div>
      </div>
    </Carousel>
  );
}

export default Home;
