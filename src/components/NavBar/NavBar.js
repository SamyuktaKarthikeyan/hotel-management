import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('/');

  const handleClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <div>
      <ul className='nav-bar'>
        <li onClick={() => handleClick('/')} className={activeItem === '/' ? 'nav-item active' : 'nav-item'}>HOME</li>
        <li onClick={() => handleClick('/resorts')} className={activeItem === '/resorts' ? 'nav-item active' : 'nav-item'}>RESORTS</li>
        <li onClick={() => handleClick('/offers')} className={activeItem === '/offers' ? 'nav-item active' : 'nav-item'}>OFFERS</li>
        <li onClick={() => handleClick('/rooms')} className={activeItem === '/rooms' ? 'nav-item active' : 'nav-item'}>ROOMS</li>
        <li onClick={() => handleClick('/reviews')} className={activeItem === '/reviews' ? 'nav-item active' : 'nav-item'}>REVIEWS</li>
        <li onClick={() => handleClick('/giftcards')} className={activeItem === '/giftcards' ? 'nav-item active' : 'nav-item'}>GIFT CARDS</li>
      </ul>
    </div>
  );
}

export default NavBar;
