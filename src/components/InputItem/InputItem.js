import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../InputItem/Input.module.css'

const InputItem = () => (<div>
    <TextField className={styles.input}
        id="outlined-dense-multiline"
        label="Добавить задачу"
        margin="dense"
        variant="outlined"
    />
</div>);

export default InputItem;