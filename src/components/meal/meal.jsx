import React from 'react';
import styles from './meal.module.css';

const Meal = (props) => {
    return(
    <div>
    <span className={styles.per_meal}>
            <div className={styles.time}><b>{props.meal.codeNm}</b></div>
            <div className={styles.meal}>{props.meal.mealNm}</div>
        </span>
    </div>
        
)};

export default Meal;