import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Paper } from '@mui/material';

function Billing() {
  const loggedInUser = useSelector(state => state.loggedInUser);
  const token = localStorage.getItem("jwtToken");
  const [roomCost, setRoomCost] = useState(0);

  useEffect(() => {
    if (loggedInUser && token) {
      axios.get(`http://localhost:8080/api/tickets/totalCost/${loggedInUser.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setRoomCost(response.data);
      })
      .catch(error => {
        console.error('Error fetching total room cost:', error);
      });
    }
  }, [loggedInUser]);
  const foodcost = useSelector(state => state.totalCost);

  return (
    <div style={{margin:"0",height:"100vh",backgroundImage:"url(https://www.thedailymeal.com/img/gallery/15-foods-you-should-avoid-at-a-buffet/l-intro-1681829493.jpg)", objectFit:"cover"}}>
    <div style={{position:"relative", top:"10vh"}}>
 <Paper elevation={5} style={{ width:'56vw', margin:'auto', padding:'2vh 2vw', borderRadius:'3vh'}}>
   <h1 style={{textAlign:'center'}}>Your Bill</h1>
   <div style={{textAlign:'center'}}> 
   <p>Food Cost: {foodcost}</p>
      <p>Room Cost: {roomCost}</p>
      <p>Total Cost: {foodcost+roomCost}</p>
   </div>
          </Paper>
      </div>
    </div>
  )
}

export default Billing
