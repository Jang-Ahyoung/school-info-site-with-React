import React from 'react';
import styles from './test.module.css';
import {Link } from 'react-router-dom';

const Test = (props) => {
    const move = (e,url)=>{
        e.preventDefault();
        window.location.href=`http://${url}`;
    }
    return(
        <section className={styles.body}>
            <Link to="bus" className={`${styles.singular} ${styles.bus_color}`}>BUS 시간표</Link>
            <span className={styles.span}>
                <Link to="meal" className={`${styles.first} ${styles.color1}`}>기숙사 🍚</Link>
                <span className={`${styles.second} ${styles.color}`} onClick={(e) => {move(e, 'mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005')}}>학식 🍴</span>

            </span>
            
            <span className={`${styles.singular} ${styles.polar_color}`} onClick={(e) => {move(e, 'angluvpeng.netlify.app')}}>TAKE A SAMLL REST</span>

            <span className={styles.span}>
                <Link to="delivery" className={`${styles.first} ${styles.color}`}>배달 🍔</Link>
                
                <span className={`${styles.second} ${styles.color1}`} onClick={(e) => {move(e, 'whereismine.tk')}}>택배 📦</span>
            </span>

        </section>
    )};

export default Test;