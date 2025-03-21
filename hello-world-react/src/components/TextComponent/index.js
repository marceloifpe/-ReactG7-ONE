import React from "react";
import styles from "./textComponent.module.css";

const TextComponent = () => {
  return (
    <div className={styles.textContainer}>
      <h1>Hello, World!</h1>
      <p>Sou Lucas Elias Dickmann, desenvolvedor full-stack.</p>
    </div>
  );
};

export default TextComponent;
