import React from 'react'
import {Paper} from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import './GiftCard.css'

function GiftCard() {
  return (
    <div style={{background:'linear-gradient(to right, #E9F8FF, #90B2D8, #C1E3FF)', height:'160vh'}}>
      <Paper style={{display:'flex', height:'75vh', width:'80vw', margin:'auto', marginTop:'2vh', borderRadius:'3vh'}} elevation={5}>
        <div style={{width:'60%'}}>
        <Carousel autoPlay={true} showArrows={false} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Atlantiscasino.jpg" alt="Slide 1" style={{height:"75vh",borderBottomLeftRadius:'3vh', borderTopLeftRadius:'3vh'}}/>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Federal_palace_hotel%2CVictoria_island%2CLagos.jpg" alt="Slide 2" style={{height:"75vh",borderBottomLeftRadius:'3vh', borderTopLeftRadius:'3vh'}}/>
      </div>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Banff_Spring_Hotel_Alberta_Kim_Payant_02.jpg" alt="Slide 3" style={{height:"75vh",borderBottomLeftRadius:'3vh', borderTopLeftRadius:'3vh'}}/>
      </div>
    </Carousel>
        </div>
        
        <div className="hero" style={{width:'40%', padding:'5vh 3vw'}}>
        The gift of a Star Resorts gift card is not just a vacation—it's an invitation to experience the epitome of hospitality and indulge in the finest amenities and services. Whether it's exploring breathtaking landscapes, relaxing on pristine beaches, or embarking on thrilling adventures, the possibilities are endless with Star Resorts. Give the gift of extraordinary experiences and let your loved ones create their own unforgettable journey.
        </div>
      </Paper>
      <div style={{marginTop:'5vh'}}>
        <Paper elevation={5} style={{ width:'76vw', margin:'auto', padding:'2vh 2vw', borderRadius:'3vh'}}>
          <h1>Discover offers</h1>
          <div style={{display:'flex', padding:'2vh 2vw'}}>

        <div class="container">
  <img src="https://www.holidify.com/images/cmsuploads/compressed/83167901_20230424143940.jpg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">
      Stay for 3 nights and get 1 night free
    </div>
  </div>
</div>
        <div class="container">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Fernhills_Palace%2C_Ooty.JPG/1200px-Fernhills_Palace%2C_Ooty.JPG" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
        <div class="container">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kerala_Houseboat_%28191490747%29.jpeg/1200px-Kerala_Houseboat_%28191490747%29.jpeg" alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default GiftCard
