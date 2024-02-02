import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const PageWrapper = () => {


    return (
        <>
            <header id="header">
                <nav id="navbar">
                    <NavLink to="/" id="logo-ts" className="nav-link logo">
                        Thomas Suggitt. 
                    </NavLink>
                    <NavLink to="/" className="nav-link start-home">Home</NavLink>
                
                    <NavLink to="/about" className="nav-link start-about">About Me</NavLink>
                 
                    <NavLink to="/projects" className="nav-link start-projects">Projects</NavLink>
                 
                    <NavLink to="/contact" className="nav-link start-contact">Contact Me</NavLink>
                  
                </nav>
                
            </header>
            <Outlet />
           <footer id="footer">
          <p id="footer-text">Thomas Suggitt 2024</p>
          <a href="https://www.linkedin.com/in/thomas-suggitt-7a1b151a7/">
            <img id = "logo" src="../../linkedin-icon-2.svg"></img>
        </a>
      </footer>
    </>
  );
};

export default PageWrapper;
