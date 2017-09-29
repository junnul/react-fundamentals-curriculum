import axios from 'axios';

const api = {
    getForecast(city) {
        let url = `http://${window.location.hostname}:8081/api/forecast/${city}`;
        return axios.get(url).then(response => {
            return response.data;
        });
    },

    getWeather(city) {
        let url = `http://${window.location.hostname}:8081/api/weather/${city}`;
        return axios.get(url).then(response => {
            return response.data;
        });
    }
};
export default api;

