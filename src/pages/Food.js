import React, { useState, useEffect } from 'react';
import { Paper, FormControl, InputLabel, MenuItem, Select, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateTotalCost } from '../store/reducer';
import { useNavigate } from 'react-router-dom';

const Food = () => {
  const navigate=useNavigate();
  const [bk, setBk] = useState(0);
  const [lh, setLh] = useState(0);
  const [dn, setDn] = useState(0);
  const [tc, setTc]=useState(0);
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    const totalCost = (bk * 100) + (lh * 150) + (dn * 200);
    setTc(totalCost);
    dispatch(updateTotalCost(totalCost));
  }, [bk, lh, dn, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/billing');
  }

    return (
        <div style={{margin:"0",height:"200vh",backgroundImage:"url(https://www.thedailymeal.com/img/gallery/15-foods-you-should-avoid-at-a-buffet/l-intro-1681829493.jpg)", objectFit:"cover"}}>
           <div style={{position:"relative", top:"10vh"}}>
        <Paper elevation={5} style={{ width:'56vw', margin:'auto', padding:'2vh 2vw', borderRadius:'3vh'}}>
          <h1>Food we offer</h1>
          <div style={{display:'flex', padding:'2vh 2vw'}}>

        <div class="container">
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Full_English_breakfast.jpg" alt="Avatar" class="image" style={{height:"35vh"}}/>
  <div class="overlay">
    <div class="text">
      Breakfast
    </div>
  </div>
</div>
        <div class="container">
  <img src="https://farm6.staticflickr.com/5498/18881648635_9e20c8ca1a_z.jpg" alt="Avatar" class="image"  style={{height:"35vh"}}/>
  <div class="overlay">
    <div class="text">Lunch</div>
  </div>
</div>
        <div class="container">
  <img src="https://hips.hearstapps.com/hmg-prod/images/creamy-pasta-burrata-7-1656098638.jpeg" alt="Avatar" class="image"  style={{height:"35vh"}}/>
  <div class="overlay">
    <div class="text">Dinner</div>
  </div>
</div>
          </div>
        </Paper>
      </div>
      <div style={{position:"relative", top:"10vh", marginTop:"10vh"}}>
        <Paper elevation={5} style={{ width:'56vw', margin:'auto', padding:'2vh 2vw', borderRadius:'3vh'}}>
          <h1 style={{ textAlign: "center" }}>Your order</h1>
            <FormControl>
            
              
              <p>Buy Breakfast Buffet</p>

            <TextField
              id="outlined-number-rooms"
              label="No of plates"
              type="number"
              value={bk}
              onChange={(e) => setBk(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
              <p>Buy Lunch Buffet</p>

            <TextField
              id="outlined-number-rooms"
              label="No of plates"
              type="number"
              value={lh}
              onChange={(e) => setLh(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
              <p>Buy Dinner Buffet</p>

            <TextField
              id="outlined-number-rooms"
              label="No of plates"
              type="number"
              value={dn}
              onChange={(e) => setDn(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br/>
            
            <br/>
     
            <p>Total cost: {tc} </p>


            <Button variant="contained" type="submit" style={{ width: '10vw' }} onClick={handleSubmit}>
            Submit
          </Button>
         </FormControl>
          
    
        </Paper>
      </div>
        </div>

    );
}

export default Food;
