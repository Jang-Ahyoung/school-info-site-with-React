import React from 'react';
import styles from './navbar.module.css';
const Navbar = (props) => (
            <nav className={styles.navbar}>
                <section className={styles.logo}>
                    <div className={styles.logonIcon}><i class="fab fa-slack"></i></div>
                    PNU INFO
                </section>

                <section className={styles.menu}>
                    <span className={styles.icon}>
                        <a className="fas fa-bus" href=""></a>
                    </span>
                    <span className={styles.icon}>
                        <a className="fas fa-utensils"  href="https://dorm.pusan.ac.kr/mdorm/function/mealPlan/40000403"></a>
                        <span className={styles.text}>긱</span>
                    </span>
                    <span className={styles.icon}>
                        <a className="fas fa-utensils" href="https://mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005"></a>
                        <span className={styles.text}>학</span>
                    </span>
                    <span className={styles.icon}>
                        <a className="fas fa-truck" href="https://whereismine.tk"></a>
                    </span>

                </section>

                <section className={styles.contact}>
                    <p className={styles.message}>
                        <i className="far fa-address-card"></i>
                        <span className={styles.message_text}>wegotthelove27@gmail.com</span>  
                    </p>
                </section>

            </nav>
    );

export default Navbar;