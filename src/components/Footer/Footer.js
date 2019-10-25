import React from 'react';
import styles from '../Footer/Footer.module.css';

const Footer = ({ count }) => (
    <div className={styles.footer}>
        <div>
            <span>Осталось дел: {count}</span>
        </div>
        <div className={styles.button__wrap}>
            <button className={styles.button}>Все</button>
            <button className={styles.button}>Активные</button>
            <button className={styles.button}>Завершённые</button>
            <button className={styles.button}>Удалить выполненные</button>
        </div>
    </div >
);
export default Footer;