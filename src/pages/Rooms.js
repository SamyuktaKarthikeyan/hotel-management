import React from 'react'
import "./Home.css"
function Rooms() {
  return (
    <div>
      <section class="section-two">
    <div class="container-two">
      <div class="container-two-content content">
        <h1 className='homehead'>Standard Suite</h1>
        <p className='homepara'> Cost: <strong> Rs. 1000</strong></p>
        <p className='homepara'>
        The Standard Suite at Star Resorts embodies comfort and elegance. Featuring tastefully designed interiors and modern furnishings, it provides a serene retreat for guests seeking a blend of style and convenience. The suite boasts a spacious living area, well-appointed bedroom, and a luxurious bathroom, creating an inviting atmosphere for relaxation.</p>
        <p className='homepara'>Equipped with state-of-the-art amenities, including high-speed Wi-Fi, flat-screen TV, and a fully stocked minibar, the Standard Suite ensures guests have everything they need at their fingertips. The plush king-sized bed with premium linens guarantees a restful night's sleep, while the en-suite bathroom with a rainfall shower promises a rejuvenating experience..</p>
      </div>
      <div class="container-two-content content-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmB-jSzrTLBK9JWtgnwGqiAn9Tqefm8Ab9hCPcm9YQOjnxow7k1ZxS7L3m_IpBp86YhH4&usqp=CAU" />
      </div>
    </div>
 </section>
 <section class="section-two" style={{backgroundColor:'#000435', color:'antiquewhite'}}>
    <div class="container-two">
      <div class="container-two-content content-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6EBAzMsoX4PI5RmmNqrPZ_uTfGrs2_JlQEaCSYhB3K1qH9bzCtU1mdxaN4CeZHzHY08&usqp=CAU" />
      </div>
      <div class="container-two-content content">
        <h1 className='homehead' style={{textAlign:'right'}}>Deluxe Suite</h1>
        <p className='homepara'> Cost: <strong> Rs. 2000</strong></p>
        <p className='homepara'>

        The Deluxe Suite at Star Resorts is a lavish haven of indulgence and refinement. Designed with opulence in mind, this suite offers a spacious living area, a separate elegant bedroom, and a luxurious en-suite bathroom. Guests are greeted with tasteful décor, premium furnishings, and panoramic views, creating an ambiance of unparalleled luxury.</p>
        <p className='homepara'>Step into a realm of opulence as you are greeted by tasteful décor, premium amenities, and personalized service that caters to your every desire. The spacious living area is perfect for relaxation, while the separate bedroom beckons with a sumptuous king-sized bed dressed in the finest linens.</p>
      </div>
    </div>
 </section>
 <section class="section-two" style={{paddingTop:'10vh', overflow:'hidden'}}>
    <div class="container-two">
      <div class="container-two-content content">
        <h1 className='homehead'>Luxury Suite</h1>
        <p className='homepara'> Cost: <strong> Rs. 3000</strong></p>
        <p className='homepara'>
        
The Luxury Suite at Star Resorts is a celestial abode where dreams come to life. Nestled high above, this exclusive sanctuary offers a realm of unparalleled luxury and indulgence, promising an ethereal escape for the most discerning travelers..</p>
        <p className='homepara'>Pamper yourself in the exquisitely designed marble-clad bathroom, featuring a private Jacuzzi and a cascading waterfall shower that transports you to a state of pure bliss. Revel in the breathtaking panoramas from your expansive private terrace, where sunsets paint the sky in a symphony of colors.</p>
      </div>
      <div class="container-two-content content-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzt2MHwf1pt8AHg-8B_LwAzqTFfBRyvpAnM4LWZBpreshvk_JsKxHPSUJhwS4ue-bwvyI&usqp=CAU" />
      </div>
    </div>
 </section>
    </div>
  )
}

export default Rooms
