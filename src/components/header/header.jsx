import React from 'react';
import {Link } from 'react-router-dom';
import styles from './header.module.css';
const Header = (props) => (
            <nav className={styles.navbar}>
                <Link to="/" className={styles.link}>
                    <section className={styles.logo}>
                        <div className={styles.logonIcon}><i class="fab fa-slack"></i></div>
                        PNU INFO
                    </section>
                </Link>
                
                <section className={styles.menu}>
                    <Link to="/bus" className={styles.link}>
                        <span className={styles.icon}>
                            <a className="fas fa-bus" href=""></a>
                        </span>
                    </Link>
                    <span className={styles.icon}>
                        <Link to="/meal" className={styles.link}>
                            <a className="fas fa-utensils" ></a>
                            <span className={styles.text}>긱</span>
                        
                        </Link>
                        
                    </span>
                    <Link to="https://mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005" className={styles.link}>

                        <span className={styles.icon}>
                        <a className="fas fa-utensils" href="https://mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005"></a>
                        <span className={styles.text}>학</span>
                    </span>
                    </Link>
                    
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

export default Header;