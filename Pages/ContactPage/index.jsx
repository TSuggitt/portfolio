import React from 'react'
import { default as ContactBox } from "../../components/ContactBox/index"
const ContactPage = () => {
  return (
    <>
     <div className="home-container">
     <div className="overlay">
    <div className="welcome-text">
            <h1 id="hello">Contact Me </h1> 
            <h3 id="intro-desc">Please feel to message me with any enquiries! My Linkedin is also in the page footer where my messages are always open!
            </h3>
            
            </div>
    <ContactBox />
    </div>
    </div>
    </>
  )
}

export default ContactPage
