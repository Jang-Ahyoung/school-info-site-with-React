import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/header';
import styles from './Main.module.css';

function Main() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.main}>
                <section className={styles.section}>
                    <div className={`${styles.btn} ${styles.first}`} onClick={() => history.push('bus')}>
                        <i className="fas fa-bus"></i>
                        <p className={styles.text}>Bus</p>
                        <p className={styles.clickArrow}>➭</p>
                    </div>
                    <a className={`${styles.btn} ${styles.second}`}>
                        <i className="fas fa-utensils" ></i>
                        <p className={styles.text}>식단 정보</p>
                        <div className={styles.selectBtnContainer}>
                            <a className={styles.selectBtn} href={'//mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005'}>학식</a>
                            <button className={styles.selectBtn} onClick={() => history.push('meal')}>기숙사</button>
                        </div>
                    </a>
                </section>
                <section className={styles.section}>
                    <a className={`${styles.btn} ${styles.third}`} href={"https://mw.pusan.ac.kr/07_Notice/CalendarList.new.html"}>
                        <i className="fas fa-graduation-cap"></i>
                        <p className={styles.text}>학사 일정</p>
                        <p className={styles.clickArrow}>➛</p>
                    </a>
                    <div className={`${styles.btn} ${styles.forth}`} onClick={() => history.push('delivery')}>
                        <i className="fas fa-hamburger"></i>
                        <p className={styles.text}>배달 음식</p>
                        <p className={styles.clickArrow}>➯</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main;