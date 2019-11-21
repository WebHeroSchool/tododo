import React from 'react';
import classnames from 'classnames';
import styles from '../Todo/Todo.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';

class Item extends React.Component {

    render() {
        const { value, isDone, onClickDone, id } = this.props

        return (
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
    }
}

Item.propTypes = {
    value: PropTypes.string,
    id: PropTypes.number,
    isDone: PropTypes.bool
};

export default Item;