import React from "react";
import styles from "../Footer/Footer.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

const Footer = ({ countAll, countEnd, countInWork, sorting, onClickSort }) => (
  <div className={styles.footer}>
    <div className={styles.button__wrap}>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Завершенные",
        })}
        onClick={() => onClickSort("Завершенные")}
      >
        Завершённые<p className={styles.count_item}>{countEnd}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Незавершенные",
        })}
        onClick={() => onClickSort("Незавершенные")}
      >
        Незавершённые<p className={styles.count_item}>{countInWork}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Все",
        })}
        onClick={() => onClickSort("Все")}
      >
        Все<p className={styles.count_item}>{countAll}</p>
      </button>
    </div>
  </div>
);

Footer.propTypes = {
  count: PropTypes.number,
};

export default Footer;
// className={classnames({
//                         [styles.button]: true,
//                         [styles.button_active]: buttonsActive.doneTasksActive
//                       })}
