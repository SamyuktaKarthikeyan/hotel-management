import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

function SideBar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('/');

  const handleClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <div>
      <ul className='sidebar'>
        <li
          onClick={() => handleClick('/dashboard')}
          className={activeItem === '/dashboard' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Your Profile
        </li>
        <li
          onClick={() => handleClick('/dashboard/bookticket')}
          className={activeItem === '/dashboard/bookticket' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Book Tickets
        </li>
        <li
          onClick={() => handleClick('/dashboard/feedback')}
          className={activeItem === '/dashboard/feedback' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Feedback
        </li>
        <li
          onClick={() => handleClick('/dashboard/food')}
          className={activeItem === '/dashboard/food' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Food Orders
        </li>
        <li
          onClick={() => handleClick('/dashboard/billing')}
          className={activeItem === '/dashboard/billing' ? 'sidebar-item active' : 'sidebar-item'}
        >
          Billing
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
