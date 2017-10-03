import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import Detail from '../../app/components/Detail';
import DayItem from '../../app/components/DayItem';

describe('Detail', () => {

    it('renders details', () => {
        const props = {
            location: {
                state: {
                    day: {
                        dt: 1506592800,
                        humidity: 100,
                        temp: {min: 10, max: 20},
                        weather: [{description: 'Lorem',icon: '01d'}]
                    }
                }
            },
            match: {params: {city: 'Foobar'}}
        };
        const wrapper = shallow(<Detail {...props} />);

        expect(wrapper.find('h3').text()).to.equal('Foobar');
        expect(wrapper.find(DayItem)).to.have.length(1);
        expect(wrapper.contains(<p>Lorem</p>)).to.equal(true);
        expect(wrapper.contains(<p>min temp: 10 &#176;C</p>)).to.equal(true);
        expect(wrapper.contains(<p>max temp: 20 &#176;C</p>)).to.equal(true);
        expect(wrapper.contains(<p>humidity: 100</p>)).to.equal(true);
    });

    it('redirects if state is null', () => {
        window.location.href = 'http://example.com';
        const props = {
            location: {
                state: null
            },
            match: {params: {city: 'Foobar'}}
        };
        const wrapper = shallow(<Detail {...props} />);
        expect(window.location.href).to.equal('/forecast/Foobar');
    });

});
