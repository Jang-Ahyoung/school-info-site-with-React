import React,{memo} from 'react';
import styles from './taxi.module.css';
const Taxi = memo((props) => (
        <div className={styles.taxi}>
            <span className={styles.container}>
                <span className={styles.num}>
                    ☎ 콜택시 :<br/>
                    055-351-0002<br/>
                </span> 
                <span className={styles.num}>
                ☎ 육천콜 :<br/>
                    055-356-6000<br/>
                </span>
                <span className={styles.num}>
                ☎ 콜택시 :<br/>
                    055-355-8444<br/>
                </span>
            </span>

            <span className={styles.span}>
                🚕 기본 운임 : 3,300원<br/><br/>
                💸  할증 (심야 - 시외 - 복합) <br/>
                <span className={styles.tab}>20% - 30% - 40% </span><span className={styles.small}> * 심야 - 00:00-04:00</span>        
            </span>

        </div>
));

export default Taxi;