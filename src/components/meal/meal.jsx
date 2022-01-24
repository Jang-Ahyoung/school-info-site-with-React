import React from "react";
import styles from "./meal.module.css";


const Meal = ({ meal }) => {

  return (
    <div>
      <span className={styles.per_meal}>
        <div className={styles.meal_kind}><b>{meal.codeNm}</b></div>
        <div className={styles.meal}>{meal.mealNm.split("/").join(", ")}</div>
      </span>
    </div>
  );
};

export default Meal;
