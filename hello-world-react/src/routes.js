import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ParticlesComponent from "./components/ParticlesComponent";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";

function AppRoutes() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ParticlesComponent />
      {!sidebarOpen && (
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      {sidebarOpen && (
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={sidebarOpen} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<div>Página não encontrada...</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
