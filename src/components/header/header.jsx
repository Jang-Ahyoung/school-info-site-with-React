import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
const Header = memo((props) => {
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.link}>
                <section className={styles.logo}>
                    <div className={styles.logonIcon}><i class="fab fa-slack"></i></div>
                    부산대 Miryang Campus</section></Link>

            <section className={styles.menu}>
                <Link to="/bus" className={styles.link}><span className={styles.icon}>
                    <a className="fas fa-bus"></a></span>
                </Link>
                <Link to="/meal" className={styles.link}><span className={styles.icon}>
                    <a className="fas fa-utensils" ></a>
                    <span className={styles.text}>긱</span></span>
                </Link>

                <a className={styles.icon} href={'http://mw.pusan.ac.kr/10_Food/Food.asp?boardName=R005'}>
                    <i className="fas fa-utensils" ></i>
                    <span className={styles.text}>학</span>
                </a>

                <a className={styles.icon} href={'http://where-is-mine.netlify.app'}>
                    <i className="fas fa-truck"></i>
                </a>
            </section>
            <section className={styles.contact}><p className={styles.message}>
                <i className="far fa-address-card"></i>
                <span className={styles.message_text}>wegotthelove27@gmail.com</span>  </p>
            </section>
        </nav>
    )
});

export default Header;