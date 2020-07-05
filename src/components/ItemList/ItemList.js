import React from "react";
import Item from "../Item/Item";
import styles from "../Todo/Todo.module.css";
import PropTypes from "prop-types";
import { Droppable, Draggable } from "react-beautiful-dnd";

const ItemList = ({ onClickDone, onClickDelete, sort, sortValue }) => (
  <>
    {sort.length === 0 ? (
      <div>
        <div className={styles.error_image} />
        <p className={styles.error_message}>Вы не выполнили ни одной задачи</p>
      </div>
    ) : (
      <ul className={styles.item_list}>
        {sort.map((item) => (
          <li key={item.id} className={styles.item}>
            <div className={styles.task}>
              <Item
                value={item.value}
                isDone={item.isDone}
                onClickDone={onClickDone}
                id={item.id}
              />
              <button
                className={styles.button__img}
                onClick={() => onClickDelete(item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    )}
  </>
);

ItemList.propTypes = {
  sort: PropTypes.array.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};

export default ItemList;
