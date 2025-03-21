import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./navbar.module.css"; // Importando o CSS Module
import MenuLink from "../MenuLink";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [prevPos, setPrevPos] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.pageYOffset;
      setPrevPos(currentPos);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [prevPos]);

  return (
    <header>
      <nav id="navbar" className={styles.navigation}>
        {isMobile ? (
          <div className={styles.toggleIcon} onClick={toggleSidebar}>
            <FaBars size={40} color="white" />
          </div>
        ) : (
          <ul className={styles.navList}>
            <li>
              <MenuLink to="/">Home</MenuLink>
            </li>
            <li>
              <MenuLink to="/about-me">Sobre Mim</MenuLink>
            </li>
            <li>
              <MenuLink to="/skills">Skills</MenuLink>
            </li>
            <li>
              <MenuLink to="/projects">Projetos</MenuLink>
            </li>
            <li>
              <MenuLink to="/contact">Contato</MenuLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
