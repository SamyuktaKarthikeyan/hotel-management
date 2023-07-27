import React from 'react'
import { useState } from 'react';
import Admin from './Admin';
import User from './User';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';

const paperStyle={
        padding: '30px 20px',
        width: '30vw',
        margin: '20px auto'
}
function SignIn() {
    const options = [
        { value: 'User', label: 'User' },
        { value: 'Staff', label: 'Staff' }  
    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const handleChange = (e) => {
        const selectedOption = e.target.value;
       
        setSelectedOption(selectedOption);
        console.log(selectedOption);
    };
    let form = selectedOption === "User" ? <User /> : <Admin data={null}/>;
  return (
    <div style={{margin:0, height:'100vh', backgroundImage:'url("https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b611b-resorts-near-coimbatore.jpg?fit=1000%2C667&ssl=1")', paddingTop:'10vh'}}>
        <Paper style={paperStyle} elevation={10}>
            <h1 style={{textAlign:"center"}}>Sign In</h1>
        <FormControl>
  <InputLabel id="demo-simple-select-label">Type of User</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedOption}
    label="Type of User"
    onChange={handleChange}
    style={{width: '30vw', marginBottom: '20px'}}
  >
    {
                options.map((options) => (
                    <MenuItem value={options.value}>{options.label}</MenuItem>
                ))
            }
  </Select>
</FormControl>
{form}
</Paper>
    </div>
  );
}

export default SignIn
