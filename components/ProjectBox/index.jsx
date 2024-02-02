import React from 'react'
import { useState, useEffect } from "react"


const ProjectBox = ({ title, description, image_url1, image_url2 }) => {

    
  return (
    <>
    <div id= "project">
    <h2>{title}</h2>
    <img src={image_url1}></img>
    <img src={image_url2}></img>
    <p>{description}</p>
    </div>


    </>
  )
}

export default ProjectBox
