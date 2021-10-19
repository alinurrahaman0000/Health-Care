import React from 'react';
import NoPage from './nopage.jpg'
import './NoFound.css'
const NoFound = () => {
    return (
        <div className="img">
            <img src={NoPage} alt="" />
        </div>
    );
};

export default NoFound;