import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function TopBar() {
    const navigate = useNavigate();
    const dispatch= useDispatch();
    const loggedInUser=useSelector(state=>state.loggedInUser)
    const handleSignIn = () => {
      var element = document.getElementsByClassName("nav-item active")[0];
      if(element!=null){
        element.classList.remove("active");

      }
        navigate('/signin');
    }
    const handleDash = () => {
      var element = document.getElementsByClassName("nav-item active")[0];
      if(element!=null){
        element.classList.remove("active");

      }
        navigate('/dashboard');
    }
    const handleSignOut = () => {
      var element = document.getElementsByClassName("nav-item active")[0];
      localStorage.removeItem('jwtToken');
      if(element!=null){
        element.classList.remove("active");

      }
        dispatch({
          type:'LOGOUT'
        })
        navigate('/');
    }
    return (
    <div style={{padding:'1vh', paddingLeft:'1vw', paddingRight:'1vw', display:'flex', justifyContent:'space-between', backgroundColor:'#082759', color:'white'}}>
      Star Resorts
      {loggedInUser ? (
        <div style={{display:'flex'}}> <div style={{padding:'2vh 2vw'}}> Welcome {loggedInUser.fname} </div>
        <Button variant="outlined" onClick={handleDash} style={{ color: '#0b3270', borderColor: '#0b3270', backgroundColor: 'white',margin:'auto 2vw' }}>
          Dashboard
        </Button>
        <Button variant="outlined" onClick={handleSignOut} style={{ color: '#0b3270', borderColor: '#0b3270', backgroundColor: 'white',margin:'auto 2vw' }}>
          Sign out  
        </Button>
        </div>

      ) : (
        <Button variant="outlined" onClick={handleSignIn} style={{ color: '#0b3270', borderColor: '#0b3270', backgroundColor: 'white' }}>
          Sign In
        </Button>
      )}
    </div>
  )
}

export default TopBar