import React from "react";
import styles from "../Footer/Footer.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

const Footer = ({
  count_all,
  count_end,
  count_inWork,
  sorting,
  onClickSort,
}) => (
  <div className={styles.footer}>
    <div className={styles.button__wrap}>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Завершенные",
        })}
        onClick={() => onClickSort("Завершенные")}
      >
        Завершённые<p className={styles.count_item}>{count_end}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Незавершенные",
        })}
        onClick={() => onClickSort("Незавершенные")}
      >
        Незавершённые<p className={styles.count_item}>{count_inWork}</p>
      </button>
      <button
        className={classnames({
          [styles.button]: true,
          [styles.button_active]: sorting === "Все",
        })}
        onClick={() => onClickSort("Все")}
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
