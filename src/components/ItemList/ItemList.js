import React from 'react';
import Item from '../Item/Item';
import styles from '../App/App.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const ItemList = ({ items, onClickDone }) => (<ul>
    {items.map(item => <li key={item.value} className={styles.item}>
        <div className={styles.task}>

            <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
            <button className={styles.button__img}></button>
        </div>
    </li>)}
</ul>);

export default ItemList;