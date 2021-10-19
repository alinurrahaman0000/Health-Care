import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import './Services.css'

const Services = () => {
    const [product,setProduct] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div>
            <h1>OUR SERVICES</h1>
            <br /><br /><br /><br />
            <div className="services-container">
            {
              product.map(product =><Cart
              key={product.key}
                product ={product}
              ></Cart>
             
              )
          }
            </div>
           
        </div>
    );
};

export default Services;