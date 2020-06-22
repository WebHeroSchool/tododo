import React from "react";
import styles from "../InputItem/Input.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";

class InputItem extends React.Component {
  state = {
    inputValue: "",
    isEmpty: false,
  };

  onButtonClick = () => {
    // const { items } = this.props;
    //
    // items.forEach((item) => {
    //   if (item.value === this.state.inputValue) {
    //     this.setState({
    //       isRepeat: true,
    //     });
    //   }
    // });
    if (this.state.inputValue === "") {
      this.setState({
        isEmpty: true,
      });
    } else {
      this.setState({
        inputValue: "",
        isEmpty: false,
      });

      this.props.onClickAdd(this.state.inputValue);
    }
  };

  render() {
    const { inputValue, isEmpty } = this.state;
    const { isRepeat } = this.state;
    return (
      <div className={styles.input_wrap}>
        <div
          className={classnames({
            [styles["wrap__error-empty-text"]]: isEmpty,
            [styles["wrap__error-repeat-case"]]: isRepeat,
          })}
        >
          <input
            placeholder={"Введите сюда название дела..."}
            className={styles.input}
            value={inputValue}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.onButtonClick();
              }
            }}
            onChange={(event) =>
              this.setState({ inputValue: event.target.value })
            }
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
