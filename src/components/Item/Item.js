import React from "react";
import classnames from "classnames";
import styles from "../Todo/Todo.module.css";
import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { value, isDone, onClickDone, id } = this.props;

    return (
      <div
        className={classnames({
          [styles.item]: true,
          [styles.done]: isDone,
        })}
      >
        <label>
          <input
            className={styles.input}
            type="checkbox"
            onClick={() => onClickDone(id)}
            checked={isDone}
          />
          <span className={styles.text}>{value}</span>
        </label>
      </div>
    );
  }
}

Item.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
};

export default Item;
