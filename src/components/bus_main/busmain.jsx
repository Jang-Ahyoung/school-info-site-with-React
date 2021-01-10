import React from 'react';
import {Link } from 'react-router-dom';
import styles from './busmain.module.css';

const BusMain = (props) => (
    <section className={styles.body}>
        <Link to='/bustoStation' className={styles.btn1}>
            🚅 역으로
        </Link>
        <Link to='/bustoPusanUn' className={styles.btn2}>
        🏫 학교로
        </Link>
    </section>
        
    );

export default BusMain;