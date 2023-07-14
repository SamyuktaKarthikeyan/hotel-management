import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Admin() {
  const [data, setData] = useState({
    employeeId: '',
    password: ''
  });

  const users = useSelector(state => state.users);

  const ValidateEmpNo = () => {
    if (data.employeeId === '') {
      return <div>Enter Employee ID</div>;
    } else {
      return <div></div>;
    }
  };

  const ValidatePass = () => {
    if (data.password === '') {
      return <div>Enter Password</div>;
    } else {
      return <div></div>;
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.type === 'Admin');

    if (data.employeeId === user?.empno && data.password === user?.password) {
      alert('Login Successful');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          label="Employee ID"
          variant="outlined"
          value={data.employeeId}
          helperText={ValidateEmpNo()}
          onChange={(e) => setData({ ...data, employeeId: e.target.value })}
        />
        <br/><br/>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          value={data.password}
          helperText={ValidatePass()}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <br/><br/>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="contained" type="submit" style={{ width: '10vw' }} onClick={HandleSubmit}>
            Submit
          </Button>
          <br/>
          <Link to="/signup">New User? Sign Up</Link>
        </div>
      </form>
    </div>
  );
}

export default Admin;
