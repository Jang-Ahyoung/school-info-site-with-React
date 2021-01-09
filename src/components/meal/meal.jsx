import React from 'react';
import styles from './meal.module.css';

const Meal = (props) => {
    return(
    <div>
    {/* <section>{props.mealDate}</section> */}

    <span className={styles.per_meal}>

            {/* <p>{props.meal.mealDate}</p> */}
            <div className={styles.time}><b>{props.meal.codeNm}</b></div>
            <div className={styles.meal}>{props.meal.mealNm}</div>
        </span>
    </div>
        
)};

export default Meal;