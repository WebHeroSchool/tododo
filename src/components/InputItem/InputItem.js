import React from "react";
import styles from "../InputItem/Input.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class InputItem extends React.Component {
  state = {
    inputValue: "",
    isEmpty: false,
    isRepeat: false,
  };

  onLabelChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  onButtonClick = () => {
    let { onClickAdd, items } = this.props;

    let isRepeat = false;
    items.forEach((item) => {
      if (item.value === this.state.inputValue) {
        isRepeat = true;
      }
    });
    if (this.state.inputValue === "" || isRepeat) {
      this.setState({
        isEmpty: true,
      });
      setTimeout(() => {
        this.setState({
          isEmpty: false,
        });
      }, 1500);
    } else {
      this.setState({
        inputValue: "",
        isEmpty: false,
        isRepeat: false,
      });
      onClickAdd(this.state.inputValue);
    }
  };

  render() {
    const { isEmpty, isRepeat } = this.state;

    return (
      <div className={styles.input_wrap}>
        <div
          className={classnames({
            [styles["input_style"]]: true,
            [styles["wrap__error-empty-text"]]: isEmpty,
            [styles["wrap__error-repeat-case"]]: isRepeat,
          })}
        >
          <input
            placeholder={"Введите сюда название дела..."}
            className={styles.input}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.onButtonClick();
              }
            }}
            value={this.state.inputValue}
            onChange={this.onLabelChange}
          />
        </div>
        <button className={styles.btn_input} onClick={this.onButtonClick} />
      </div>
    );
  }
}

InputItem.propTypes = {
  inputValue: PropTypes.string,
  isError: PropTypes.bool,
};

export default InputItem;
