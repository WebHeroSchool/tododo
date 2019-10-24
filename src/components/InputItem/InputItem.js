import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div>
    <TextField
        id="outlined-dense-multiline"
        label="Добавить задачу"
        margin="dense"
        variant="outlined"
    />
</div>);

export default InputItem;