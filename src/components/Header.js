import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isAboutPage = location.pathname !== '/home';

  return (
    <header  className={`header ${isAboutPage ? 'header-other' : ''}`}>
      <div className={`header-content${isAboutPage ? 'header-content-other' : ''}`}>
        <div className = "links">
            <Link to="/home">Home</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/WiCSE-Personal-Project/projects">Projects</Link>
            {/* <Link to="/WiCSE-Personal-Project/experience">Fun Facts</Link> */}
            
        </div>
      </div>
    </header>
  );
};

export default Header;
