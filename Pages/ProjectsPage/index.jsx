import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/projects");
                const data = response.data;
                setProjects(data);
                console.log("Projects loaded successfully:", data);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchData();
    }, []); 

    return (
        <>
       
       <div className="proj-container">    
            <div className="overlay">
                <div className="welcome-text">
                
                     <h1 id="projects">Projects</h1>
                     <br />
                     <br />
                     <h3 id="proj-desc"> 
                     Below are projects that I have completed as part of the LaFosse Academy. The further you scroll, the more advanced the projects become, starting at a simple frontend application to full stack applications. </h3>

                     <br />
                     <br />
                     </div>
        
                    <div className="carousel-item">
                    {projects.map((project, index) => (
                        <div id= "proj-item" key={index}>
                            <img id="proj-img" src={project.img_url1} className="d-block" alt={project.title} />
                            <div className="carousel-caption ">
                                <h5 className="p-title">{project.title}</h5>
                                <p className="p-desc">{project.description}</p>
                                <p> GitHub: <a href={project.img_url2}>{project.img_url2}</a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
           
           
            </>
      
    );
};

export default ProjectsPage;
