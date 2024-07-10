// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/account">My Account</Link></li>
                <li><Link to="/admin">Admin Dashboard</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
