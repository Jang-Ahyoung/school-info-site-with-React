class MealAPI {
    constructor() {
        this.requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mealAPI() {
        const date = new Date();
        const formatDate = (date) => {
            return new Date(checkDateValidation(date)).toISOString().split("T")[0];
        };
        
        const calcMouth = (range) => {
            let date = new Date();
            date.setMonth(date.getMonth() + range);
            return formatDate(date);
        };

        const checkDateValidation = (date) => {
            const dateRange = (date.getDay() || 6) - 1;
            if (dateRange === 0) return;
            else return date.setDate(date.getDate() - dateRange);
        };
        
        const response = await fetch(`https://api.pusan.ac.kr:8443/meal/sub?no=3&startDt=${formatDate(date)}&endDt=${calcMouth(1)}`,
            this.requestOptions
        );
       
        const result = await response.json();
        return result;
    }
}

export default MealAPI;
