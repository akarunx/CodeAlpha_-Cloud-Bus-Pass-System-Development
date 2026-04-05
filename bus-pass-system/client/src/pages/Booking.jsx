import React, { useState } from 'react';
import axios from 'axios';

const Booking = () => {
    const [name, setName] = useState('');
    const [bus, setBus] = useState('');

    const handleBook = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/tickets/book', {
                passengerName: name,
                busNumber: bus
            });
            alert(`Success! Ticket ID: ${res.data.ticket.qrCode}`);
        } catch (err) {
            alert("Booking Failed. Is the server running?");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>🚌 Cloud Bus Pass Booking</h2>
            <input type="text" placeholder="Your Name" onChange={(e) => setName(e.target.value)} /><br/><br/>
            <input type="text" placeholder="Bus Number (e.g. 10A)" onChange={(e) => setBus(e.target.value)} /><br/><br/>
            <button onClick={handleBook} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>
                Book Now
            </button>
        </div>
    );
};

export default Booking;