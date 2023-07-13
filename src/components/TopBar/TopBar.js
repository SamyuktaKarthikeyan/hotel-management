import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
function TopBar() {
    const navigate = useNavigate();
    const handleClick = () => {
      var element = document.getElementsByClassName("nav-item active")[0];
      if(element!=null){
        element.classList.remove("active");

      }
        navigate('/signin');
    }
    return (
    <div style={{padding:'1vh', paddingLeft:'1vw', paddingRight:'1vw', display:'flex', justifyContent:'space-between', backgroundColor:'#082759', color:'white'}}>
      TopBar
      <Button variant="outlined" onClick={handleClick} style={{color:'#0b3270', borderColor:'#0b3270', backgroundColor:'white'}}>Sign In</Button>
    </div>
  )
}

export default TopBar
