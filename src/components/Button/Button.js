import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClickBack, onClickNext }) => {
  return (
    <div className={styles.button__wrap}>
      <button className={styles.button} onClick={() => onClickBack()}>
        Назад
      </button>
      <button className={styles.button} onClick={() => onClickNext()}>
        Вперёд
      </button>
    </div>
  );
};

export default Button;
