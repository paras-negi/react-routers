import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const navStyle= {
    color: 'white'
}

const Nav = ()=> {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className= 'nav-links'>
                <Link to ='/aboutus'>
                <li style= {navStyle}>AboutUs</li>
                </Link>
               
                <Link to='/info'>
                <li style= {navStyle}>Info</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;