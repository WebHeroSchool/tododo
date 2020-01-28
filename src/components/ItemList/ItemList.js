import React from 'react';
import Item from '../Item/Item';
import styles from '../Todo/Todo.module.css';
import PropTypes from 'prop-types';



const ItemList = ({ items, onClickDone, onClickDelete }) => (<ul>
    {items.map(item => <li key={item.value} className={styles.item}>
        <div className={styles.task}>
            <Item
                value={item.value}
                isDone={item.isDone}
                onClickDone={onClickDone}
                id={item.id} />
            <button className={styles.button__img}
                onClick={() => onClickDelete(item.id)}></button>
        </div>
    </li>)}
</ul>);

ItemList.propTypes = {
    items: PropTypes.array
};

export default ItemList;