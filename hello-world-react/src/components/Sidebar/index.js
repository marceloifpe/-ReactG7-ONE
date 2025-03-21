import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./toggleSidebar.module.css";
import MenuLink from "../MenuLink";

const Sidebar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div
      id="sidebar"
      className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
      style={{
        width: isSidebarOpen ? "100%" : "0",
        opacity: isSidebarOpen ? "1" : "0",
      }}
    >
      <div className={styles.sidebarHeader}>
        <div className={styles.closeIcon} onClick={toggleSidebar}>
          <FaTimes size={40} color="white" />
        </div>
      </div>
      <MenuLink to="/" onClick={toggleSidebar} isSidebar>
        Home
      </MenuLink>
      <MenuLink to="/about-me" onClick={toggleSidebar} isSidebar>
        Sobre Mim
      </MenuLink>
      <MenuLink to="/skills" onClick={toggleSidebar} isSidebar>
        Skills
      </MenuLink>
      <MenuLink to="/projects" onClick={toggleSidebar} isSidebar>
        Projetos
      </MenuLink>
      <MenuLink to="/contact" onClick={toggleSidebar} isSidebar>
        Contato
      </MenuLink>
    </div>
  );
};

export default Sidebar;
