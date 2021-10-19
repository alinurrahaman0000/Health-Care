import React from 'react';
import './Header.css'
import {Link}  from'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logu from '../Header/logu/logu.png'
import { Navbar } from 'react-bootstrap';
const Header = () => {
    const {user,logout} = useAuth()
    return (
        
        <div className ="header ">
           <Navbar className ="header "  collapseOnSelect expand="lg" fixed="top">
            
               <img className="mt-8" src={logu} alt="" />
                <Link to="/home">Home</Link>
            <Link to="/services">Servises</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/placeOrder">About</Link>
            <Link to="/registar">Registar</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName}</span>
           {user?.email&& <button onClick ={logout}>Log out</button>}
           
              
          
            
           </Navbar>
            
            
        </div>
    );
};

export default Header;