import React from "react";
import styles from "../Footer/Footer.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";



const Footer = ({ count_all, count_end, count_inWork, onClickNotDoneTasks, buttonsActive }) => (
  <div className={styles.footer}>
    <div className={styles.button__wrap}>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: null,
        })}
      >
        Завершённые<p className={styles.count_item}>{count_end}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: null,
        })}
        onClick={onClickNotDoneTasks}
      >
        Незавершённые<p className={styles.count_item}>{count_inWork}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
        })}
      >
        Все<p className={styles.count_item}>{count_all}</p>
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
