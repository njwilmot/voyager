import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this is linked correctly

function Header() {
    return (
        <header className="header">
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/jobs">Maps</Link>
            </div>
            <div className="navigation">
                <Link to="/career">Career</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/profile">Profile</Link>
            </div>
        </header>
    );
}

export default Header;
