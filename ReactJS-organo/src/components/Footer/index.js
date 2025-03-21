/*
 * Desafio do Módulo: React: desenvolvendo com JavaScript | Programa Oracle ONE
 * Dev e Aluno: Lucas Elias Dickmann
 */

/* Component Footer */

import "./Footer.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = ({ socials, alt, logo, subTitle, text }) => {
  const getIcon = (name) => {
    switch (name) {
      case "linkedin":
        return (
          <i className="icon">
            <FaLinkedin />
          </i>
        );
      case "github":
        return (
          <i className="icon">
            <FaGithub />
          </i>
        );
      case "instagram":
        return (
          <i className="icon">
            <FaInstagram />
          </i>
        );
      default:
        return null;
    }
  };
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url("./images/digimon-bg.png")` }}
    >
      <div className="container-social-media">
        {socials.map((social, index) => (
          <a key={index} href={social.link} aria-label={social.alt}>
            {getIcon(social.name)}
          </a>
        ))}
      </div>
      <img src={logo} alt={alt} />
      <p>{text}</p>
      <div className="container-subtitle">
        <h5>{subTitle}</h5>
      </div>
    </footer>
  );
};

export default Footer;
