import React, { useState } from 'react';
import './css/Header.module.css';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';


function Header() {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <nav className="navbar navbar-dark header-dark fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Brand on the left */}
        <a className="navbar-brand" href="/">Ethivalue Financial Services</a>
        
        {/* Right section: Dropdown + Toggler */}
        <div className="d-flex align-items-center gap-2">
          {/* Show Profile Icon If Logged In */}
          {user && (
            <div className="dropdown">
              <button className="btn btn-dark dropdown-toggle" type="button" id="profileDropdown" data-bs-toggle="dropdown">
                <i className="bi bi-person-circle"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                <li><span className="dropdown-item-text">Logged in as {user.email}</span></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/profile">Profile</a></li>
                <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
              </ul>
            </div>
          )}
    
          {/* Navbar toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    
      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
          <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about" >About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#whoWeserve">Who We Serve</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services">Our Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#whyChooseUs" >Why Choose Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services" >Knowledge Center</a>
            </li>
            
            {!user && (
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
    
      );
    }

export default Header;