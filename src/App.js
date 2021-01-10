import { useEffect, useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Meals from './components/meals/meals';
import Header from './components/header/header';
import { Table } from './components/table/toStation/table_tostation';
// import TO_STATION_BUS_DATA from './components/JSON_File/week_CampusToStation.json';
// import TO_STATION_BUS_DATA_VAC from './components/JSON_File/vac_CampusToStation.json';
// import TO_STATION_BUS_DATA_VAC_ONLY from './components/JSON_File/vacCampusOnly_CampusToStation.json';
import TO_CAMPUS_BUS_DATA from './components/JSON_File/week_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC from './components/JSON_File/vac_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC_ONLY from './components/JSON_File/vacCampusOnly_StationToCampus';
import Table1 from './components/Table';
import { Table2 } from './components/table/table_toCampus';
import Navbar from './components/bus_navbar/navbar';

function App() {
  // const dataS = TO_STATION_BUS_DATA;
  // const data_vacS = TO_STATION_BUS_DATA_VAC;
  // const data_vac_onlyS = TO_STATION_BUS_DATA_VAC_ONLY;
  const dataC = TO_CAMPUS_BUS_DATA;
  const data_vacC = TO_CAMPUS_BUS_DATA_VAC;
  const data_vac_onlyC = TO_CAMPUS_BUS_DATA_VAC_ONLY;
  const [meals, setMeals] = useState([]);

  // 오늘 날짜 정보
  const today = new Date();


  console.log(today.toLocaleString()); // 2020. 12. 22. 오후 6:09:47
  console.log(today.toLocaleDateString()); // 2020.12.22.
  const todayDate = '0' + today.getDate();
  const Monthtoday = '0' + today.getMonth() + 1;
  const today_date = today.getFullYear() + '-' + Monthtoday.slice(-2) + '-' + todayDate.slice(-2);
  console.log(today_date);

  // 2주전 날짜 정보
  today.setDate(today.getDate() - 14);
  const Monthbefore2Weeks = today.getMonth() + 1;
  const Daybefore2Weeks = '0' + today.getDate();
  const dayBefore2Weeks = today.getFullYear() + '-' + Monthbefore2Weeks + '-' + Daybefore2Weeks.slice(-2);
  console.log(dayBefore2Weeks); // 2020-12-8 -> 일의 숫자가 08 형태여야지 FETCH API에 적용이돼!!

  // 한달 후 날짜 정보
  const todayForAfer = new Date();
  todayForAfer.setMonth(todayForAfer.getMonth() + 1);
  const MonthAfter1Month = '0' + todayForAfer.getMonth() + 1;
  const DayAfter1Month = '0' + todayForAfer.getDate();
  const dayAfter1Month = todayForAfer.getFullYear() + '-' + MonthAfter1Month.slice(-2) + '-' + DayAfter1Month.slice(-2);
  console.log(dayAfter1Month); // 2021-1-22

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.pusan.ac.kr:8443/meal/sub?no=3&startDt=${today_date}&endDt=${dayAfter1Month}`, requestOptions)
      .then(response => response.json())
      .then(result => setMeals(result))
      .catch(error => console.log('error', error));

  }, []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* / 홈화면 일때는 로그인화면으로 가게 만 */}
          <Header />
          <Navbar />
          {/* <Table2 /> */}

          {/* <Table id={"dataS"} data={dataS} />
          <Table id={"data_vacS"} data={data_vacS} />
          <Table id={"data_vac_onlyS"} data={data_vac_onlyS} /> */}
          {/* <Table1 data={data} /> */}
        </Route>

        <Route path="/meal">
          <Header />
          <Meals meals={meals} />
        </Route>
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <p className="Table-header">Basic Table</p>
    //   <Table1 data={data} />
    // </div>

  );
}

export default App;
