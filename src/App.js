import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Resorts from './pages/Resorts';
import GiftCard from './pages/GiftCard';
import Reviews from './pages/Reviews';
import NavBar from './components/NavBar/NavBar';
import SignIn from './pages/SignIn/SignIn';
import TopBar from './components/TopBar/TopBar';
import SignUp from './pages/SignIn/SignUp';
import { useSelector } from 'react-redux';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import BookTickets from './pages/BookTickets';
import Food from './pages/Food';
import Billing from './pages/Billing';
import FeedbackForm from './pages/FeedbackForm';
import Rooms from './pages/Rooms';

function App() {
  const user = useSelector(state => state.users);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'fixed', top: '0', width: '100%', zIndex: '999' }}>
        <TopBar name={user.fname} />
        <NavBar />
      </div>
      <div style={{ marginTop: '60px' }}>
        {/* Add marginTop to create space below the fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/giftcards" element={<GiftCard />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route index element={<Profile/>}/>
            <Route path='bookticket' element={<BookTickets/>}/>
            <Route path='feedback' element={<FeedbackForm/>}/>
            <Route path='food' element={<Food/>}/>
            <Route path='billing' element={<Billing/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
