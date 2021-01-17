import React,{memo} from 'react';
import {Link } from 'react-router-dom';
import Header from '../header/header';
import styles from './busmain.module.css';

const BusMain = memo((props) => (
    <>
        <Header/>
        <section className={styles.body}>
            <Link to='/bustoStation' className={styles.btn1}>
                🚅 역으로
            </Link>
            <Link to='/bustoPusanUn' className={styles.btn2}>
            🏫 학교로
            </Link>
        </section>
    </>

));

export default BusMain;