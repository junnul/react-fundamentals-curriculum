import axios from 'axios';
import cache from './cache';

const localStoragePrefix = 'weather-app';
const api = {
    getForecast(city) {
        const cacheKey = `${localStoragePrefix}:${city.toLowerCase()}`;
        const cached = cache.getItem(cacheKey);
        if (cached !== null) {
            return cached; }

        let url = `http://${window.location.hostname}:8081/api/forecast/${city}`;
        return axios.get(url).then(response => {
            cache.setItem(cacheKey, response.data);
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
