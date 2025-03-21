import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to, isSidebar }) {
  const location = useLocation();

  return (
    <Link
      className={`${isSidebar ? styles.sidebarLink : styles.link} ${
        location.pathname === to ? styles.linkHighlighted : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
