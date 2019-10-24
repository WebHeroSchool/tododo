import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) => (<ul>
    <li><Item todoItem={todoItem[0]} /></li>
    <li><Item todoItem={todoItem[1]} /></li>
    <li><Item todoItem={'Обновить резюме'} /></li>
</ul>);

export default ItemList;