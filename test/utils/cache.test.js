import sinon from 'sinon';
import moment from 'moment';
import cache from '../../app/utils/cache';

describe('cache', () => {

    it('gives null if key doesnt exist', () => {
        expect(cache.getItem('foobar')).toBe(null);
    });

    it('gives cached data if not outdated', () => {
        const time = moment().subtract(1, 'seconds').unix();
        const cached = JSON.stringify({time: time, data: 'Lorem'});
        window.localStorage.setItem('foobar', cached);
        const data = cache.getItem('foobar');
        return data.then(results => expect(results).toEqual('Lorem'));
    });

    it('gives null if cached data is outdated', () => {
        const time = moment().subtract(20, 'minutes').unix();
        const cached = JSON.stringify({time: time, data: 'Lorem'});
        window.localStorage.setItem('foobar', cached);
        const data = cache.getItem('foobar');

        expect(data).toEqual(null);
    });

    it('sets data to cache', () => {
        const cached = JSON.stringify('Foobar');
        window.localStorage.setItem('foobar', cached);
        const time = moment().unix();
        cache.setItem('foobar', 'Lorem');

        const data = JSON.parse(window.localStorage.getItem('foobar'));
        expect(data.data).toEqual('Lorem');
        console.log(data.time, time);
    });

});
