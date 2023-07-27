import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import './Profile.css';

function Profile() {
  const [tickets, setTickets] = useState([]);
  const loggedInUser = useSelector(state => state.loggedInUser);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (loggedInUser && token) {
      axios.get(`http://localhost:8080/api/tickets/getTickets/${loggedInUser.email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          setTickets(response.data);
        })
        .catch(error => {
          console.error('Error fetching tickets:', error);
        });
    }
  }, [loggedInUser]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy');
  };

  const handleCancelTicket = (id) => {
    axios.delete(`http://localhost:8080/api/tickets/cancelTicket/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        // If ticket is successfully canceled, update the tickets state by removing the canceled ticket
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== id));
      })
      .catch(error => {
        console.error('Error canceling ticket:', error);
      });
  };

  return (
    <div style={{ padding: "5vh" }}>
      <h2>Your Bookings</h2>
      {tickets.length === 0 ? (
        <p>No tickets booked</p>
      ) : (
        <table className="tickets-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>No of Rooms</th>
              <th>Cost</th>
              <th>Action</th> {/* Add a new column for the "Delete" button */}
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.location}</td>
                <td>{formatDate(ticket.startDate)}</td>
                <td>{formatDate(ticket.endDate)}</td>
                <td>{ticket.rooms}</td>
                <td>{ticket.billCost}</td>
                <td>
                  <button onClick={() => handleCancelTicket(ticket.id)}>Delete</button>
                </td> {/* Render the "Delete" button for each ticket */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Profile;
