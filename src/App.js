import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Membership from './pages/Membership';
import Resorts from './pages/Resorts';
import GiftCard from './pages/GiftCard';
import Reviews from './pages/Reviews';
import NavBar from './components/NavBar/NavBar';
import SignIn from './pages/SignIn/SignIn';
import TopBar from './components/TopBar/TopBar';
import SignUp from './pages/SignIn/SignUp';
import { useSelector } from 'react-redux';

function App() {
  const user=useSelector(state=>state.users)
  return (
    <div className="App" style={{display:'flex', flexDirection:'column'}}>
      <TopBar />
      <NavBar />
        {/* <div>
          {user.map((user) => (
            <div key={user.id}>
              <h1>{user.fname}</h1>
              <h1>{user.lname}</h1>
              <h1>{user.email}</h1>
              <h1>{user.password}</h1>
              <h1>{user.type}</h1>
            </div>
          ))}



        </div> */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/giftcards" element={<GiftCard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
    </div>
  );
}

export default App;
