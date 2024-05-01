import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is linked correctly

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">
                    <img src="/logo.png" alt="Voyager" />
                </Link>
            </div>
            <div className="navigation">
                <Link to="/jobs">Jobs</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search jobs or locations" />
                <button type="button">Search</button>
            </div>
        </header>
    );
}

export default Header;
