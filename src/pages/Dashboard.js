import React from 'react';
import SideBar from '../components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  // Check if jwtToken is not in localStorage, then navigate to '/signin'
  React.useEffect(() => {
    if (localStorage.getItem('jwtToken') === null) {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div style={{ marginTop: '7vh', display: 'flex' }}>
      <div style={{ width: '25%' }}>
        <SideBar />
      </div>
      <div style={{ width: '75%' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
