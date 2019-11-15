import React from 'react';
import classnames from 'classnames';
import styles from '../App/App.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

const Item = ({ value, isDone, onClickDone, id }) => (
    <div className={
        classnames({
            [styles.item]: true,
            [styles.done]: isDone
        })
    }>
        <Checkbox
            color='default'
            value='checkedI'
            onClick={() => onClickDone(id)}
        />
        {value}
    </div >);

Item.propTypes = {
    value: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired
};

export default Item;