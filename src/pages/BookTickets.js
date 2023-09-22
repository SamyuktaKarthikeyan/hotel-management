import React, { useState } from 'react';
import { Paper, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import DatePicker from "react-datepicker"; 
import {Button} from '@mui/material'; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';


import "react-datepicker/dist/react-datepicker.css";  
import './BookTickets.css';
let hotels = [
  {
    "id": "1",
    "name": "Star Cottage Home",
    "location": "Jaipur"
  },
  {
    "id": "2",
    "name": "Star Safari",
    "location": "Ranthambore"
  },
  {
    "id": "3",
    "name": "Star Grand",
    "location": "Delhi"
  },
  {
    "id": "4",
    "name": "Star Atlantis",
    "location": "Mumbai"
  },
  {
    "id": "5",
    "name": "Star Palace",
    "location": "Kolkata"
  },
  {
    "id": "6",
    "name": "Star Royale",
    "location": "Shimla"
  },
  {
    "id": "7",
    "name": "Star Tea Garden",
    "location": "Darjeeling"
  },
  {
    "id": "8",
    "name": "Star Village",
    "location": "Chennai"
  },
  {
    "id": "9",
    "name": "Star Boat Resort",
    "location": "Kochi"
  }
];


const roomcost=[
  {
    "id": "1",
    "name": "Standard Suite",
    "cost": "1000"
  },
  {
    "id": "2",
    "name": "Deluxe Suite",
    "cost": "2000"
  },
  {
    "id": "3",
    "name": "Luxury Suite",
    "cost": "3000"
  }
]
  

  function BookTickets() {
    const [data, setData] = useState({
      startDate: new Date(),
      endDate: new Date(),
      email: '', // Assuming the user's email is stored in the 'users' state
      location: hotels[0].location,
      members: 0,
      rooms: 0,
      roomType: roomcost[0].cost,
      billCost: 0,
    });
    const loggedInUser = useSelector(state => state.loggedInUser);

    

    const [selectedLocation, setSelectedLocation] = useState(hotels[0].name);
    const [totalCost, setTotalCost] = useState(0);
    const [startDate, setStartDate] = useState(new Date());  
    const [endDate, setEndDate] = useState(new Date());  
    const [differenceInDays, setDifferenceInDays] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [members, setMembers] = useState(0);
    const [roomtype, setRoomtype] = useState(roomcost[0].cost);
    useEffect(() => {
      if (loggedInUser) {
        setData(prevData => ({ ...prevData, email: loggedInUser.email }));
      }
    }, [loggedInUser]);

    useEffect(() => {
      const calculatedTotalCost = differenceInDays * roomtype * rooms;
      setTotalCost(calculatedTotalCost);
      setData(prevData => ({ ...prevData, billCost: calculatedTotalCost }));
    }, [differenceInDays, roomtype, rooms]);

    const paperStyle = {
      padding: '30px 20px',
      width: '50vw',
      margin: '20px auto'
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const backendURL = 'http://localhost:8080/api/tickets/book'; 
      setData((prevData) => ({
        ...prevData,
        members: members,
        rooms: rooms,
      }));
      console.log(members+" "+rooms);
      console.log(data);
      const payload = {
        startDate: data.startDate,
        endDate: data.endDate,
        email: data.email,
        location: data.location,
        members: data.members,
        rooms: data.rooms,
        roomType: data.roomType,
        billCost: data.billCost,
      };
      const token = localStorage.getItem("jwtToken");
      console.log(token);
      if (token) {
    axios.post(backendURL, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // Handle the response from the backend if needed
        console.log('Data sent to backend successfully:', response.data);
      })
      .catch(error => {
        // Handle errors if the post request fails
        console.error('Error sending data to backend:', error);
      });
  } else {
    console.error('JWT token not found in local storage.');
  }
  
    };
  
    const handleLocationChange = (e) => {
      const selectedLocation = e.target.value;
      setData({ ...data, location: selectedLocation });
      setSelectedLocation(selectedLocation);
    };
  
    const handleRoomtypeChange = (e) => {
      const selectedRoomtype = e.target.value;
      setRoomtype(selectedRoomtype);
      setData({ ...data, roomType: selectedRoomtype });
    };
    const calculateTotalCost = () => {
    return totalCost;
  };
    const handleStartDateChange = (date) => {
      setStartDate(date);
      if (endDate < date) {
        setEndDate(date);
      }
      setData({ ...data, startDate: date });
      calculateDifferenceInDays(date, endDate);
    };
  
    const handleEndDateChange = (date) => {
      setEndDate(date);
      setData({ ...data, endDate: date }); 
      calculateDifferenceInDays(startDate, date);
    };
  
    const calculateDifferenceInDays = (start, end) => {
      const differenceInTime = end.getTime() - start.getTime();
      const daysDifference = differenceInTime / (1000 * 3600 * 24);
      setDifferenceInDays(Math.ceil(daysDifference));
    };
    const handleRoomChange = (e) => {
      const rooms = e.target.value;
      setRooms(rooms);
      setData({ ...data, rooms: rooms });
    };
    const handleMemberChange = (e) => {
      const members = e.target.value;
      setMembers(members);
      setData({ ...data, members: members });
    };
  
  
    return (
      <div>
        <div style={{ margin: 0, height: '150vh', backgroundImage: 'url("https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b611b-resorts-near-coimbatore.jpg?fit=1000%2C667&ssl=1")', paddingTop: '10vh' , objectFit:"cover"}}>
          <Paper style={paperStyle} elevation={10}>
            <h1 style={{ textAlign: "center" }}>Book your tickets</h1>
            <FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedLocation}
                label="Type of User"
                onChange={handleLocationChange}
                style={{ width: '30vw', marginBottom: '20px' }}
              >
                {hotels.map((hotel) => (
                  <MenuItem key={hotel.id} value={hotel.name}>{hotel.location}</MenuItem>
                ))}
              </Select>
              </FormControl>
              <h2>You have been booked at {selectedLocation} </h2>
              <label>Start date</label>
              <br />
              <DatePicker 
                selected={startDate} 
                onChange={handleStartDateChange}
                minDate={new Date()} // Minimum date is today's date
                dateFormat="dd/MM/yyyy"  

              />  
              <br/>
              <label>End date</label>
              <br />
              <DatePicker 
                selected={endDate} 
                onChange={handleEndDateChange}
                minDate={startDate} // Minimum date is the selected start date
                dateFormat="dd/MM/yyyy"  
              />  
              <br/>

            <TextField
              id="outlined-number-rooms"
              label="No of rooms"
              type="number"
              value={rooms}
              onChange={handleRoomChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
            <TextField
              id="outlined-number-members"
              label="No of members"
              type="number"
              value={members}
              onChange={handleMemberChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
            <FormControl>
            <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={roomtype}
                label="Type of User"
                onChange={handleRoomtypeChange}
                style={{ width: '30vw', marginBottom: '20px' }}
              >
                {roomcost.map((roomcost) => (
                  <MenuItem key={roomcost.id} value={roomcost.cost}>{roomcost.name}</MenuItem>
                ))}
              </Select>
              </FormControl>
            <br/>
            <p>Total cost: {calculateTotalCost()} </p>

            <Button variant="contained" type="submit" style={{ width: '10vw' }} onClick={handleSubmit} >
            Submit
          </Button>
         </FormControl>
          
        </Paper>
      </div>  
    </div>
  );
}

export default BookTickets;
