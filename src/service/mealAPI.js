class MealAPI {
    constructor() {
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mealAPI() {

        const today = new Date();

        const todayDate = '0' + today.getDate();

        const Monthtoday = '0' + (today.getMonth() + 1);

        const today_date = today.getFullYear() + '-' + Monthtoday.slice(-2) + '-' + todayDate.slice(-2);

        // 한달 후 날짜 정보
        const todayForAfer = new Date();
        todayForAfer.setMonth(todayForAfer.getMonth() + 1);
        const MonthAfter1Month = '0' + (todayForAfer.getMonth() + 1);
        const DayAfter1Month = '0' + todayForAfer.getDate();
        const dayAfter1Month = todayForAfer.getFullYear() + '-' + MonthAfter1Month.slice(-2) + '-' + DayAfter1Month.slice(-2);

        const response = await fetch(`
        https://api.pusan.ac.kr:8443/meal/sub?no=3&startDt=${today_date}&endDt=${dayAfter1Month}`,
            this.requestOptions
        );
        const result = await response.json();
        return result;
    }

}

export default MealAPI;
