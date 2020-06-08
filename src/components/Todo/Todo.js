import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";
import styles from "../Todo/Todo.module.css";
import { DragDropContext } from "react-beautiful-dnd";

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
    sortTask: "Все",
  };

  const [items, setItems] = useState(initialState.items);
  const [count, setCount] = useState(initialState.count);
  const [sortTask, setSort] = useState(initialState.sortTask);

  // useEffect(() => {
  //   const items = localStorage.getItem("items");
  //   setItems(JSON.parse(items));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const newTodoItems = [...items];

    const [removed] = newTodoItems.splice(source.index, 1);
    newTodoItems.splice(destination.index, 0, removed);
    setItems([...newTodoItems]);
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
    const newItems = [
      ...items,
      {
        value,
        isDone: false,
        id: count + 1,
      },
    ];
    setItems(newItems);
    setCount((count) => count + 1);
  };

  const onClickSort = (sorting) => setSort(sorting);

  let sortingTasks;
  switch (sortTask) {
    case "Завершенные":
      sortingTasks = items.filter((item) => item.isDone);
      break;
    case "Незавершенные":
      sortingTasks = items.filter((item) => !item.isDone);
      break;
    case "Все":
      sortingTasks = items;
      break;
    default:
      sortingTasks = items;
  }

  const allItems = items;
  const completedItems = items.filter((item) => item.isDone === true);
  const uncompletedItems = items.filter((item) => item.isDone === false);

  return (
    <section className={styles.todo}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={styles.todo_header}>
          <h1 className={styles.title}>Список моих дел</h1>
          <Footer
            countAll={allItems.length}
            countEnd={completedItems.length}
            countInWork={uncompletedItems.length}
            onClickSort={onClickSort}
            sorting={sortTask}
          />
        </div>
        <div className={styles.wrap_todo}>
          {items.length === 0 ? (
            <div className={styles.empty_task}>
              <div className={styles.error_image} />
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
              sort={sortingTasks}
              sortValue={sortTask}
            />
          )}
        </div>
        <div>
          <InputItem onClickAdd={onClickAdd} />
        </div>
      </DragDropContext>
    </section>
  );
};

export default Todo;
