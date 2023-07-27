import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const paperStyle = {
  padding: '30px 20px',
  width: '30vw',
  margin: '20px auto',
};

function SignUp() {
  const navigate=useNavigate();
  const [data, setData] = useState({
    email: '',  
    fname: '',
    lname: '',
    type:'',
    empno: '',
    password: '',
  });
  const options = [
    { value: 'User', label: 'User' },
    { value: 'Admin', label: 'Admin' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const dispatch = useDispatch()
  const register = () => {
    dispatch({
      type: 'REGISTER',
      payload: {
        id:(new Date()).getTime().toString(),
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        empno: data.empno,
        password: data.password,
        type: selectedOption
            }
    })
    const value={
      email:data.email,  
      firstName:data.fname,
      lastName:data.lname,  
      password:data.password
    }
    console.log(value);
    navigate('/signin');
    axios
    .post("http://localhost:8080/api/v1/auth/register", value)
    .then((response) => {
      navigate("/login", { state: { signupSuccess: true } });
    })
    .catch((error) => {
      
      console.error(error);
  });

    setData({
      email: '',
      fname: '',
      lname: '',
      type:'',
      empno: '',
      password: '',
    });
    
  }
  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setData({ ...data, type: selectedOption });
    setSelectedOption(selectedOption);
    console.log(selectedOption);
  };

  const ValidateEmail=()=>{
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(data.email==="")
    {
      return <div>Enter Email ID</div>
    }
    else if(data.email.match(mailformat))
    {
      return <div></div>
    }
    else{
      return <div>Invalid Email ID</div>
    }
  }
  let renderFields = () => {
    if (selectedOption === 'User') {
      return (
        <div>
          <TextField
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            helperText={ValidateEmail()}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
         <br/>
         <br/>
    
        </div>
      );
    } else {
      
      return <div>
        <TextField
        id="outlined-basic-empno"
        label="Employee ID"
        variant="outlined"
        value={data.empno}
        helperText={data.empno===""?"Enter Employee ID":""}
        onChange={(e) => setData({ ...data, empno: e.target.value })}
      /> <br/> <br/>
      </div>;
    }
  };
    
  return (
    <div style={{margin:0, height:'130vh', backgroundImage:'url("https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Capsule_hotel.jpg/800px-Capsule_hotel.jpg")', backgroundSize:'cover', paddingTop:'10vh'}}>
      <Paper style={paperStyle} elevation={10}>
        <h1 style={{ textAlign: 'center' }}>Sign Up</h1>

        <FormControl>
          <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedOption}
            label="Type of User"
            onChange={handleChange}
            style={{ width: '30vw', marginBottom: '20px' }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
            id="outlined-basic-fname"
            label="First Name"
            variant="outlined"
            value={data.fname}
            helperText={data.fname===""?"Enter First Name":""}
            onChange={(e) => setData({ ...data, fname: e.target.value })}
          /> <br/>
          <br/>
          <TextField
            id="outlined-basic-lname"
            label="Last Name"
            variant="outlined"
            value={data.lname}
            helperText={data.lname===""?"Enter Last Name":""}
            onChange={(e) => setData({ ...data, lname: e.target.value })}
          /><br/>
          <br/>
          {renderFields()}
          <TextField
            id="outlined-basic-password"
            label="Password"
            variant="outlined"
            type="password"
            helperText={data.password===""?"Enter Password":""}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <br/>
          <br/>
          <div style={{display:'flex',   flexDirection: 'column' , justifyContent:'center',   alignItems: 'center'}}>
        <Button variant="contained" type="submit" style={{width:'10vw'}} onClick={register}>
          Submit
        </Button>
        <br/>
          </div>
      </Paper>

      {/* Render form fields based on selected option */}
    </div>
  );
}

export default SignUp;
