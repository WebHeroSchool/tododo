import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink
        to="/"
        exact
        className={styles.link}
        activeClassName={styles.active}
      >
        Обо мне
      </NavLink>
      <NavLink
        to="/todo"
        className={styles.link}
        activeClassName={styles.active}
      >
        Список дел
      </NavLink>
    </header>
  );
};

export default Header;
