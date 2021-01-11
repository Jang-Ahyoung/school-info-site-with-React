import React from 'react';
import styles from './main.module.css';
import {Link } from 'react-router-dom';

const Main = (props) => (
    <body className={styles.container}>
            <Link to="/bus" className={styles.link}>
                <section className={styles.btn1}>버스</section>
            </Link>
            <section className={styles.just}></section>
            <Link to="/meal" className={styles.link}>
                <section className={styles.btn2}>긱밥 🍚</section>
            </Link>

        <section className={styles.des}>
            <p  className={styles.title}>부산대학교 </p>
            <p  className={styles.text}>밀양캠퍼스와 관련된 <br/>다양한 정보를 한곳에서 확인하세요</p>
        </section>
        
        <section className={styles.circle}>

            <section className={styles.firstLine}>
            <section className={styles.smallCircle}></section>
            <section className={styles.bigCircle}></section>
        </section>
        <section className={styles.firstLine}>
            <section className={styles.middleCircle}></section> 
            <section className={styles.smallCircle}></section>
        </section>
        </section>
        
    </body>

            
    );

export default Main;