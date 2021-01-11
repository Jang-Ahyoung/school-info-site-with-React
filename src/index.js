import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MealAPI from './service/mealAPI';

const meal = new MealAPI();
ReactDOM.render(
  <React.StrictMode>
    <App meal={meal} />
  </React.StrictMode>,
  document.getElementById('root')
);
