import React,{memo} from 'react';
import styles from './test.module.css';
import {Link } from 'react-router-dom';
import Header from '../header/header';

const Test = memo((props) => {
    return(
        <>
        <Header/>
        <section className={styles.body}>
            <Link to="bus" className={`${styles.singular} ${styles.bus_color}`}>BUS 시간표</Link>
            <span className={styles.span}>
                <Link to="meal" className={`${styles.first} ${styles.color1}`}>기숙사 🍚</Link>
                <a className={`${styles.second} ${styles.color}`} href={'//mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005'}>학식 🍴</a>
            </span>
            
            <a className={`${styles.singular} ${styles.polar_color}`} href={'//savethepolarbear.netlify.app/'}>TAKE A SAMLL REST</a>

            <span className={styles.span}>
                <Link to="delivery" className={`${styles.first} ${styles.color}`}>배달 🍔</Link>
                
                <a className={`${styles.second} ${styles.color1}`} href={'//whereismine.tk'}>택배 📦</a>
            </span>
        </section><br/><br/>
        <p className={styles.made}>🍋 made by ahyoung</p>
        </>
    )});

export default Test;