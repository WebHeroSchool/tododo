import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from "../Todo/Todo.module.css";

const Todo = () => {
  const initialState = {
    items: [
      {
        value: "Сходить в магазин",
        isDone: false,
        id: 1,
      },
      {
        value: "Закончить задание",
        isDone: false,
        id: 2,
      },
      {
        value: "Прочитать статью",
        isDone: false,
        id: 3,
      },
      {
        value: "Сделать уборку",
        isDone: false,
        id: 4,
      },
    ],
    count: 4,
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);

  const count_inWork = function () {
    let counter = 0;
    items.forEach((item) => {
      if (!item.isDone) counter++;
    });
    return counter;
  };

  const onClickDone = (id) => {
    const newItemList = items.map((item) => {
      const newItem = { ...item };

      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    setItems(newItemList);
  };

  const onClickDelete = (id) => {
    const newItemList = items.filter((item) => item.id !== id);
    setItems(newItemList);
    setCount((count) => count - 1);
  };

  const onClickAdd = (value) => {
    if (value !== "" && !items.some((item) => item.value === value)) {
      setItems([
        ...items,
        {
          value,
          isDone: false,
          id: count + 1,
        },
      ]);

      setCount((count) => count + 1);
    }
  };
    return (
      <section className={styles.todo}>
        <div className={styles.todo_header}>
          <h1 className={styles.title}>Список моих дел</h1>
          <Footer count_all={items.length}
                  count_end={items.length - count_inWork()}
                  count_inWork={count_inWork()}
          />
        </div>
        <div className={styles.wrap_todo}>
          {items.length === 0 ? (
            <div className={styles.empty_task}>
              <div className={styles.error_image}/>
              <p className={styles.error_message}>
                Вы ещё не добавили не одной задачи
              </p>
              <p className={styles.message_fix}>Сделайте это прямо сейчас!</p>
            </div>
          ) : (
            <ItemList
              items={items}
              onClickDone={onClickDone}
              onClickDelete={onClickDelete}
            />
          )}
        </div>
        <div>
          <InputItem onClickAdd={onClickAdd} />
        </div>
      </section>
    );

}

export default Todo;
