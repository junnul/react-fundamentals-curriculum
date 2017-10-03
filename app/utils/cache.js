import moment from 'moment';

const cache = {
    getItem(cacheKey) {
        const cached = JSON.parse(localStorage.getItem(cacheKey));
        if (cached !== null) {
            const diff = moment.duration(moment().diff(moment.unix(cached.time))).as('minutes');
            if (diff <= 15) { return Promise.resolve(cached.data); }
        }

        return null;
    },
    setItem(cacheKey, data) {
        localStorage.removeItem(cacheKey);
        localStorage.setItem(cacheKey, JSON.stringify({
            data: data,
            time: moment().unix()
        }));
    }
}

export default cache;
