import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Reviews.css"

function Reviews() {
  return (
    <div>
       <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>
      <div style={{backgroundColor:'#f08e67'}}>
        <div style={{ marginTop:'5vh'}}>
        <img src="https://www.peninsula.com/en/-/media/images/shanghai/03roomssuites/grand-deluxe-suite/peninsula-shanghai-accommodations-grand-deluxe--suite.jpg?mw=905&hash=8819BCD1A4C7B51E6DDB86792026B28E" alt="Slide 2" style={{height:"45vh", objectFit:'cover'}}/>
        </div>
        <div class="testimonial">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                        </div>
                        <p class="description">
                        From the moment we stepped into the hotel, we were captivated by its exceptional resort amenities. The expansive pool area, adorned with lush palm trees and elegant cabanas, provided a tranquil oasis where we could unwind and soak up the sun. The hotel's resort amenities were fantastic, with a stunning pool area, relaxing spa, and a variety of activities for guests to enjoy, making our stay truly memorable.
                        </p>
                        <h3 class="title">Jessica</h3>
                        <small class="post">- Archietect</small>
                    </div>
      </div>
      <div style={{backgroundColor:'#f08e67'}}>
        <div style={{ marginTop:'5vh'}}>
        <img src="https://ak-d.tripcdn.com/images/200n0d0000006vxx7445C_R_960_660_R5_D.jpg" alt="Slide 2" style={{height:"45vh", objectFit:'cover'}}/>
        </div>
        <div class="testimonial">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                        </div>
                        <p class="description">
                        We were pleasantly surprised by the room amenities at this hotel, including a comfortable bed, a spacious bathroom, and modern technology that enhanced our stay and made us feel right at home.Stepping into our room, we were delighted to discover a haven of comfort and convenience. The plush, king-sized bed enveloped us in a cocoon of relaxation, ensuring a restful night's sleep
                        </p>
                        <h3 class="title">Jessica</h3>
                        <small class="post">- Archietect</small>
                    </div>
      </div>
      <div style={{backgroundColor:'#f08e67'}}>
        <div style={{ marginTop:'5vh'}}>
        <img src="https://dimg04.c-ctrip.com/images/0225j120009ztiqdzEA7C.jpg" alt="Slide 2" style={{height:"45vh", objectFit:'cover'}}/>
        </div>
        <div class="testimonial">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                        </div>
                        <p class="description">
                        Our stay at the hotel was marked by an unwavering commitment to exceptional room amenities. The bathroom, adorned with marble accents and designer toiletries, exuded an air of sophistication and elegance. The plush bathrobes and slippers provided a luxurious touch, and the nightly turndown service added an extra touch of pampering. Overall, the resort amenities elevated our experience, making our stay truly unforgettable.
                        </p>
                        <h3 class="title">Jessica</h3>
                        <small class="post">- Archietect</small>
                    </div>
      </div>
      <div style={{backgroundColor:'#f08e67'}}>
        <div style={{ marginTop:'5vh'}}>
        <img src="https://inspirationfortravellers.com/wp-content/uploads/2014/10/Kempinski-Geneve-petit-dejeuner-32.jpg" alt="Slide 2" style={{height:"45vh", objectFit:'cover'}}/>
        </div>
        <div class="testimonial">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                        </div>
                        <p class="description">
                        The modern technology in the room, including a large flat-screen TV and high-speed internet access, kept us connected and entertained throughout our stay. We were also impressed by the thoughtfully stocked minibar and coffee station, which provided a delightful selection of beverages and snacks. From the cozy seating area to the stunning city views from our balcony, every detail in the room was carefully designed to create a comfortable and inviting ambiance.
                        </p>
                        <h3 class="title">Jessica</h3>
                        <small class="post">- Archietect</small>
                    </div>
      </div>
      <div style={{backgroundColor:'#f08e67'}}>
        <div style={{ marginTop:'5vh'}}>
        <img src="https://images.squarespace-cdn.com/content/v1/5ce3da3aa44eb30001f48c04/1575326757325-THRHYUYIQ4Y37NF73R0O/Vildsvinet-hotellrum-Dammvillan-Eriksberg_hotell_safaripark-Blekinge-066-1500px.jpg" alt="Slide 2" style={{height:"45vh", objectFit:'cover'}}/>
        </div>
        <div class="testimonial">
                        <div class="pic">
                            <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
                        </div>
                        <p class="description">
                        The room's spacious layout, stylish furnishings, and soft ambient lighting created a warm and inviting atmosphere. We were particularly impressed by the thoughtful additions, such as a well-stocked minibar with a selection of local treats and a state-of-the-art coffee machine that brewed our favorite beverages to perfection. Moreover, the panoramic views of the surrounding landscape from our private balcony added a breathtaking element to our stay, making it truly unforgettable.
                        </p>
                        <h3 class="title">Jessica</h3>
                        <small class="post">- Archietect</small>
                    </div>
      </div>
      
    </Carousel>
    </div>
  );
}

export default Reviews

