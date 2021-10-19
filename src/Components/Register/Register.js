import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   




    // const handleEmailChange = e =>{
    //     setEmail (e.target.value)
    // }

    // const handlePasswordChange =e =>{
    //     setPassword (e.target.value)
    // }
    // const handleRegistration =e =>{
    //     console.log (email,password);
    //     e.preventDefault();
    // }


    return (
        <div>
        <h2>Please Register</h2>
        <form>
         <input type="email" required/>
         <br />
         <input type="password"  required/>
         <br />
         <input  type="submit" value ="Submit" />
        </form>
        <Link to="/login">Already Registered</Link>

    </div>
    );
};

export default Register;