import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio =() =>{
    return (
        <div>
            <h2>Portfolio page</h2>
            <h3>My Works</h3>
           <Link to="/portfolio/1">Item One</Link>
           <Link to="/portfolio/2">Item Two</Link>
           <Link to="/portfolio/3">Item Three</Link>
           
        </div>
    );
};

export default Portfolio;