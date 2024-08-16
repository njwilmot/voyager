import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is linked correctly

function Header() {
    return (
        <header className="header">
            <div className="navigation">
                <Link to="/">Home</Link>
            </div>
            <div className="navigation">
                <Link to="/jobs">Jobs</Link>
                <Link to="/map">Maps</Link>
                <Link to="/data">Data</Link>
                <Link to="/data">Profile</Link>
            </div>
        </header>
    );
}

export default Header;
