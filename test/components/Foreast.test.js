import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import Forecast from '../../app/components/Forecast';
import DayItem from '../../app/components/DayItem';

describe('Forecast', () => {

    it('renders forecast', () => {
        const forecast = [
            {
                dt: 1506592800,
                weather: [
                    {icon: '01d'}
                ]
            }
        ];
        const wrapper = shallow(<Forecast city="Foo" forecast={forecast} />);

        expect(wrapper.find('h1').text()).to.equal('Foo');
        expect(wrapper.find(DayItem)).to.have.length(1);
    });

});
