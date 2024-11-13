import React from 'react';
import './Navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); 
  };

  const isCodeRoute = location.pathname === '/code';

  return (
    <div className={`nav ${isCodeRoute ? 'nav-code' : 'nav-other'}`}>
      <div onClick={handleClick} className='nav-logo'>PenCraft</div>
      <ul className="nav-menu">
        <li>
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              `nav-link ${isActive ? "active-link" : ""} ${isCodeRoute ? "black-link" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/code' 
            className={({ isActive }) => 
              `nav-link ${isActive ? "active-link" : ""}`
            }
          >
            Code
          </NavLink>
        </li>
        <li>About</li>
        <li className={`nav-contact ${isCodeRoute ? 'nav-contactnew' : ''}`}>Sign in</li>
      </ul>
    </div>
  );
};

export default Navbar;
