import React from 'react';
import { Link } from 'react-router-dom';

import './Cart.css'

const Cart = (props) => {
    const {details,img,name,key}= props.product
    return (
       <div className="card">
           <img src={img} alt="" />
           <h4>{name}</h4>
           <p>{details}</p>

           <Link to ={`/booking/${details}`}>
           <button className="btn">Doctor Information</button>
           </Link>
         

       </div>
    );
};

export default Cart;

  