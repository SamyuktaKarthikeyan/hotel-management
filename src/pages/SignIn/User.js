import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function User() {
  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const ValidateEmail = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.email === "") {
      return <div>Enter Email ID</div>;
    } else if (data.email.match(mailformat)) {
      return <div></div>;
    } else {
      return <div>Invalid Email ID</div>;
    }
  };

  const ValidatePass = () => {
    if (data.password === "") {
      return <div>Enter Password</div>;
    } else {
      return <div></div>;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/authenticate",
        {
          email: data.email,
          password: data.password,
        }
      );
     
      const jwtToken = response.data.token;
      localStorage.setItem("jwtToken", jwtToken);
      console.log(jwtToken);

      navigate("/dashboard");
      dispatch({ type: "LOGIN", payload: data });
      console.log(data.email);
    } catch (error) {
      console.log("error");
    }
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="Email" variant="outlined" value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })} helperText={ValidateEmail()} /> <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' value={data.password} helperText={ValidatePass()} onChange={(e) => setData({ ...data, password: e.target.value })} /> <br /><br />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" type="submit" style={{ width: '10vw' }}>
            Submit
          </Button>
          <br />
          <Link to="/signup">New User? Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default User;
