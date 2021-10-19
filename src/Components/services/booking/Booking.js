import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './booking.css'
const Booking = () => {
    const {cartId} = useParams();
    return (
        <div>
          
          <h2>Our Doctor Information</h2>
            <h5 className="information">{cartId}</h5>
            <Link to="/home"><button className="btn">Go to Home</button></Link>
        </div>
    );
};

export default Booking;
