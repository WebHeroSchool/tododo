import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../InputItem/Input.module.css'
import Button from '@material-ui/core/Button';


class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.setState({
            inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
    }

    render() {
        const { onClickAdd } = this.props;

        return (<div className={styles.addtask__wrapper}>
            <TextField className={styles.input}
                id="outlined-dense-multiline"
                label="Добавить задачу"
                margin="dense"
                variant="outlined"
                value={this.state.inputValue}
                onChange={event => this.setState({ inputValue: event.target.value })}
            />
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