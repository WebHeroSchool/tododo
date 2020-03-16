import React from 'react';
import styles from './About.module.css';

class About extends React.Component {
    render() {
        return (
            <div className={styles.wrap}>
                <h1 className={styles.title}>Обо мне</h1>
            </div>
        );
    }
}

export default About;