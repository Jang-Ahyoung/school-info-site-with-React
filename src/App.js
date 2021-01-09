import { useEffect, useState } from 'react';
import './App.css';
import Meals from './components/meals';

function App() {

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
    <>
      <Meals meals={meals} />
    </>
  );
}

export default App;
