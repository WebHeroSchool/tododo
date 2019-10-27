import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from '../App/App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
                value: 'Сходить в магазин',
                isDone: false
            },
            {
                value: 'Закончить задание',
                isDone: true
            },
            {
                value: 'Прочитать статью',
                isDone: false
            },
            {
                value: 'Сделать уборку',
                isDone: false
            }
        ]

    };

    render() {
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Список дел:</h1>
                <InputItem />
                <ItemList items={this.state.items} />
                <Footer count={3} />
            </div>);
    }
};

export default App;