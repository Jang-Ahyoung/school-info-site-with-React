import React,{memo,useEffect,useState} from 'react';
import Header from '../header/header';
import Meal from '../meal/meal';
import styles from './meals.module.css';
import MealAPI from '../../service/mealAPI';
const mealdata = new MealAPI();

const Meals = memo((props) => {
    
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        mealdata.mealAPI().then(result => setMeals(result))
        .catch(error => console.log('error', error));
    }, []);

    const result = meals.map((meal)=>meal.mealDate);
    const meal = new Set(result);
    const mealDate = Array.from(meal);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
 
    return(
        <>
        <Header/>
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
                {meals.map(meal =>(
                    <Meal key={meal.mealDate+meal.mealKindGcd} meal={meal} mealDate={mealDate}/>
                ))}
            </section>
        </ul>
    </>
)});

export default Meals;