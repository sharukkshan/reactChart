import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <h2>Finance Bank</h2>
            </div>
            <nav className="nav">
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
            <div className="hamburger">
            
            </div>
        </header>
    );
}

export default Header;