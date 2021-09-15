import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle={
       color:'white',
       textDecoration: 'none'
    }

    return (
       <nav>
           <h3>Laburnum Foods</h3>
           <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/signup'>
                    <li>Sign Up</li>
                </Link>
           </ul>
       </nav> 
    )  
}

export default Nav;