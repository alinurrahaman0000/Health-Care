import React from 'react';
import'./Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="row footer ">
<div className="col-md-4">
<h3 className="letest">Services</h3>
 <NavLink to="/">Dental Fillings</NavLink> <br />
 <NavLink to="/">Orthodontics</NavLink><br />
 <NavLink to="/">Root Canal Treatment</NavLink><br />
 <NavLink to="/">Teeth Whitening</NavLink><br />
 <NavLink to="/">Tooth Extraction</NavLink><br />
 <NavLink to="/">Routine Dental Exam</NavLink><br />

</div>
<div className="col-md-4">
   <h3 className="letest">Useful Links</h3>
   <NavLink to="/">Home</NavLink><br />
   <NavLink to="/">About us</NavLink><br />
   <NavLink to="/">Services</NavLink><br />
   <NavLink to="/">Contact</NavLink><br />
   <NavLink to="/">Log in</NavLink><br />
   <NavLink to="/">Log Out</NavLink><br />
  
</div>
<div className="col-md-4 under">
   <h3 className="letest">Desing</h3>
     <p>United States</p>
   <p>Phone: + 123463564</p>
   <p>support@dentalcare.com</p>
   <p>Email: alinurrahaman0000@gmail.com</p>
</div>
<p><small className="letest">All Right Recived By @Alinur Rahaman</small></p>
</div>
        </div>
    );
};

export default Footer;