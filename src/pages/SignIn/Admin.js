import React from 'react'
import { useState } from 'react';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';
function Admin() {
    const [data, setData] = useState({
        employeeId: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    const ValidateEmpNo=()=>{
      if(data.employeeId==="")
      {
        return <div>Enter Employee ID</div>
      }
      else 
      {
        return <div></div>
      }
     
    }
  const ValidatePass=()=>{
      if(data.password==="")
      {
        return <div>Enter Password</div>
      }
      else 
      {
        return <div></div>
      }
      
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Employee ID" variant="outlined" value={data.employeeId} helperText={ValidateEmpNo()} onChange={(e) => setData({ ...data, employeeId: e.target.value })}/> <br/><br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={data.password} helperText={ValidatePass()} onChange={(e) => setData({ ...data, password: e.target.value })}/> <br/><br/>
        <div style={{display:'flex',   flexDirection: 'column' , justifyContent:'center',   alignItems: 'center'}}>
        <Button variant="contained" type="submit" style={{width:'10vw'}}>
          Submit
        </Button>
        <br/>
        <Link to="/signup">New User? Sign Up</Link> 
          </div>
        </form>
    </div>
  )
}

export default Admin
