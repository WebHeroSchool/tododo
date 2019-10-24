import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';

const App = () => {
    const items = [
        {
            value: 'Сходить в магазин'
        },
        {
            value: 'Закончить задание'
        },
        {
            value: 'Прочитать статью'
        },
        {
            value: 'Сделать уборку'
        }
    ];

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Важные дела!</h1>
            <InputItem />
            <ItemList items={items} />
            <Footer count={4} />
        </div>);
}

export default App;