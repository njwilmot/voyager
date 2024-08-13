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
                <Link to="/map">Maps</Link>
            </div>
        </header>
    );
}

export default Header;
