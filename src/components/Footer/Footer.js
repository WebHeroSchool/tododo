import React from 'react';
import styles from '../Footer/Footer.module.css';
import PropTypes from 'prop-types';

const Footer = ({ casesCount }) => (
    <div className={styles.footer}>
        <div>
            <span>Осталось дел: {casesCount}</span>
        </div>
        <div className={styles.button__wrap}>
            <button className={styles.button}>Все</button>
            <button className={styles.button}>Активные</button>
            <button className={styles.button}>Завершённые</button>
            <button className={styles.button}>Удалить выполненные</button>
        </div>
    </div >
);

Footer.propTypes = {
    casesCount: PropTypes.number
};



export default Footer;