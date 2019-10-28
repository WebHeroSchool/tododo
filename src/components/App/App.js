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
                isDone: false,
                id: 1
            },
            {
                value: 'Закончить задание',
                isDone: false,
                id: 2
            },
            {
                value: 'Прочитать статью',
                isDone: false,
                id: 3
            },
            {
                value: 'Сделать уборку',
                isDone: false,
                id: 4
            }
        ]

    };
    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({ items: newItemList });
    };

    render() {
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Список дел:</h1>
                <InputItem />
                <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                <Footer count={3} />
            </div>);
    }
};

export default App;