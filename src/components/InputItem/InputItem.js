import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../InputItem/Input.module.css'
import Button from '@material-ui/core/Button';

const InputItem = ({ onClickAdd }) => (<div className={styles.addtask__wrapper}>
    <TextField className={styles.input}
        id="outlined-dense-multiline"
        label="Добавить задачу"
        margin="dense"
        variant="outlined"
    />
    <Button
        variant="contained"
        color="primary"
        onClick={onClickAdd}
    >
        Добавить
    </Button>
</div>);

export default InputItem;