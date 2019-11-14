import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../InputItem/Input.module.css'
import Button from '@material-ui/core/Button';


class InputItem extends React.Component {
    state = {
        inputValue: '',
        isError: false
    };

    onButtonClick = () => {
        if (this.state.inputValue == false) {
            this.setState({
                isError: true
            })
        } else {
            this.setState({
                inputValue: '',
                isError: false
            })

            this.props.onClickAdd(this.state.inputValue.toUpperCase());
        }
    };

    render() {
        let textField;
        if (this.state.isError == false) {
            textField = <TextField
                id="outlined-dense-multiline"
                label="Добавить задачу"
                margin="dense"
                variant="outlined"
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
        } else {
            textField = <TextField
                error
                id="outlined-dense-multiline"
                className={styles.addtask__wrapper}
                label='Нужно ввести текст!'
                margin='dense'
                variant="outlined"
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
        };

        return (<div className={styles.addtask__wrapper}>
            {textField}
            <Button
                variant="contained"
                color="primary"
                onClick={this.onButtonClick}
            >
                Добавить
        </Button>
        </div>);
    }
}

export default InputItem;