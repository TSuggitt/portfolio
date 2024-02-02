import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageWrapper from "../components/PageWrapper";
import { AboutPage, ContactPage, HomePage, ProjectsPage } from "../Pages"

function App() {
  return (
      <Routes>
        <Route path="/" element={<PageWrapper />} >
        <Route index element={<HomePage />} />
        
          <Route path ="/about" element={<AboutPage />} />
          <Route path ="/contact" element={<ContactPage />} />
         
          <Route path ="/projects" element={<ProjectsPage />} />


        </Route>
      </Routes>
  );
}

export default App;
