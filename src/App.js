import { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Meals from './components/meals/meals';
import Navbar from './components/navbar_toStation/navbar';
import NavbarC from './components/navbar_toCampus/navbar';
import BusMain from './components/bus_main/busmain';
import Test from './components/test/test';
import DeliveryCard from './components/DeliveryCard/card';

function App({ meal }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    meal.mealAPI().then(result => setMeals(result))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/bus" component={BusMain} />
        <Route path="/bustoStation" component={Navbar} />
        <Route path="/bustoPusanUn" component={NavbarC} />
        <Route path="/meal"><Meals meals={meals} /></Route>
        <Route path="/delivery" component={DeliveryCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
