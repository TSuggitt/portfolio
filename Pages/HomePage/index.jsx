import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const goTo = useNavigate();

    return (
        <div className="home-container">
            <div className="overlay">
                <div className="welcome-text">
                    <h1 id="hello">Hello! </h1> 
                    <h1 id="intro-title">My Name is <b>Thomas</b>. Welcome to my portfolio!</h1>
                    <br />
                   
                    <h3 id="intro-desc"> Welcome to my portfolio, where I showcase the projects I've worked on, including this very site! This portfolio represents a culmination of my skills across the stack, leveraging technologies like ReactJS, NodeJS, ExpressJS, PostgreSQL, and Vite. 
                    <br /> 
                    <br />

If you're curious to learn more about me, delve deeper into my projects, or explore my professional journey, click below. Let's connect and explore the possibilities together! </h3>
                </div>
                <br />
                <br />
                <br />
                <div className='btn-container'>
                    <button role="contactbutton" className="about-btn" onClick={() => { goTo('/about') }}>About Me</button>      
                    
                </div>
            </div>
        </div>
    )
}

export default Homepage;
