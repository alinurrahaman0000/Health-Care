import React from 'react';
import './Wellcome.css'
const Wellcome = () => {
    return (
        
              <div className=" row mb-4  ">
            <h1 className="mt-4 mb-4">Welcome to DentalCare</h1>
            <div className="col-md-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3Qvo1nIkQnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-md-6 wellcome-text">
                    <p className="mt-4" >Sunnyvale Pediatric Dentistry & Orthodontics  has been providing comprehensive dental treatment and services for children and young adults in Sunnyvale and the South Bay Area for more than 35 years. We are Sunnyvale's first and longest standing Pediatric Dental Office. 
                     Our staff provides each child with a pleasant experience while delivering the dental care they need to keep their smiles beautiful and healthy. Prevention of childhood tooth decay is our primary focus. Our hope is that all of our patients enjoy a lifetime of bright smiles filled with beautiful teeth!Prevention of childhood tooth decay is our primary focus. Our hope is that all of our patients enjoy a lifetime of bright smiles filled with beautiful teeth!</p>
                     <button className="btn">Learn more</button>
            </div>
        </div>
      
      
    );
};

export default Wellcome;