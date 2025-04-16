import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import "./style/Navbar.css"

const Navbar = ({ user, openCart }) => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛍️ Shopverse</Link>
      <div>
        {user ? (
          <>
            <span>Welcome, {user.email}</span>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={openCart}>Cart 🛒</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
