import React from 'react';
import Meal from '../meal/meal';
import styles from './meals.module.css';

const Meals = (props) => {
    const result = props.meals.map((meal)=>meal.mealDate);
    const meal = new Set(result);
    const mealDate = Array.from(meal);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
 
    return(
        <ul className={styles.contanier}> 
        <div className={styles.circle}></div>
        <p className={styles.title}>기숙사 식단표 🍚</p>
            <div className={styles.date}>{
                mealDate.map((mealdate)=>{
                    return(
                    <section className={styles.line}>
                    <p className={styles.mealdate}>
                        {mealdate}<br/>
                        {week[new Date(mealdate).getDay()]}
                    </p>
                    </section> 
                    )}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                )
            }<br/></div>
            <section className={styles.meals}> 
                {props.meals.map(meal =>(
                    <Meal key={meal.mealDate+meal.mealKindGcd} meal={meal} mealDate={mealDate}/>
                ))}
            </section>
        </ul>

    )};

export default Meals;