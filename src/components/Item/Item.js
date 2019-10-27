import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({ value, isDone, onClickDone }) => (
    <div className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }>
        <Checkbox
            color='default'
            value='checkedI'
            onClick={() => onClickDone(isDone)}
        />
        {value}
    </div >);

export default Item;