import { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Meals from './components/meals/meals';
import Header from './components/header/header';
import Navbar from './components/navbar_toStation/navbar';
import NavbarC from './components/navbar_toCampus/navbar';
import BusMain from './components/bus_main/busmain';
import Main from './components/main/main';

function App({ meal }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    meal.mealAPI().then(result => setMeals(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>

        <Route exact path="/bus">
          <Header />
          <BusMain />
        </Route>

        <Route exact path="/bustoStation">
          <Header />
          <Navbar />
        </Route>
        <Route exact path="/bustoPusanUn">
          <Header />
          <NavbarC />
        </Route>



        <Route path="/meal">
          <Header />
          <Meals meals={meals} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
