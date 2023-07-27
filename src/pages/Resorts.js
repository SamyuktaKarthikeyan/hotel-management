import React, { useState } from 'react';
import './Resorts.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Resorts() {
  const [selectedResort, setSelectedResort] = useState(null);

  const resortsData = [
    {
      name: "Star Cottage Home",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Hotel-suite-living-room.jpg",
      description: "A cozy home-like cottage in Jaipur with all modern amenities. Enjoy a comfortable stay surrounded by lush green gardens and scenic views.",
    },
    {
      name: "Star Safari",
      image: "https://www.holidify.com/images/cmsuploads/compressed/83167901_20230424143940.jpg",
      description: "Embark on an exciting safari adventure at Star Safari. Explore the wildlife and natural beauty of the African savannah while staying in luxurious tents.",
    },
    {
      name: "Star Grand",
      image: "https://upload.wikimedia.org/wikipedia/en/8/80/Sheraton_hotel%2C_Doha_3.jpg",
      description: "Indulge in the grandeur of Star Grand. Experience opulent hospitality and world-class amenities at this luxurious hotel located in the heart of Doha.",
    },
    {
      name: "Star Atlantis",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Atlantiscasino.jpg",
      description: "Dive into the enchanting world of Star Atlantis. Discover an underwater paradise filled with stunning marine life and thrilling water activities.",
    },
    {
      name: "Star Palace",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/df/Federal_palace_hotel%2CVictoria_island%2CLagos.jpg",
      description: "Live like royalty at Star Palace. Experience the epitome of luxury and elegance with exquisite suites and top-notch services.",
    },
    {
      name: "Star Royale",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Banff_Spring_Hotel_Alberta_Kim_Payant_02.jpg",
      description: "Ascend to the heights of luxury at Star Royale. Nestled amidst the breathtaking Rocky Mountains, this resort offers a royal experience like no other.",
    },
    {
      name: "Star Tea Garden",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Fernhills_Palace%2C_Ooty.JPG/1200px-Fernhills_Palace%2C_Ooty.JPG",
      description: "Savor the serenity of Star Tea Garden. Set in the picturesque tea estates of Ooty, this resort offers a peaceful retreat amidst nature's beauty.",
    },
    {
      name: "Star Village",
      image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/01/Niraamaya-Retreats-Surya-Samudra0310.jpg",
      description: "Escape to the tranquil Star Village. Experience the essence of a coastal village lifestyle and rejuvenate with Ayurvedic therapies and yoga sessions.",
    },
    {
      name: "Star Boat Resort",
      image: "https://www.sterlingholidays.com/resorts/thumbnailcoverimage/house-boat-alleppey-thumbnail-coverimage.jpg.imgw.1280.1280.jpeg",
      description: "Cruise through the backwaters in style at Star Boat Resort. Stay in traditional houseboats and immerse yourself in the beauty of Kerala's backwaters.",
    },
  ];
  const handleResortClick = (resort) => {
    setSelectedResort(resort);
  };

  const handleCloseDialog = () => {
    setSelectedResort(null);
  };

  return (
    <div className="resorts-container" style={{ marginTop: '10vh' }}>
      {resortsData.map((resort, index) => (
        <div className="responsive" key={index} onClick={() => handleResortClick(resort)}>
          <div className="gallery">
            <img src={resort.image} alt="Resort" width="600" height="400" />
          </div>
          <div className="desc">{resort.name}</div>
        </div>
      ))}
      
      {/* Dialog Box */}
      <Dialog open={Boolean(selectedResort)} onClose={handleCloseDialog}>
        {selectedResort && (
          <>
            <DialogTitle>{selectedResort.name}</DialogTitle>
            <DialogContent>
              <p>{selectedResort.description}</p>
              {/* Add other details about the resort here */}
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Resorts
