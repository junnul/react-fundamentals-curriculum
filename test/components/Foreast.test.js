import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import sinon from 'sinon';
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

        const buttonClick = sinon.spy();
        const wrapper = shallow(<Forecast city="Foo" forecast={forecast} onClick={buttonClick} />);

        expect(wrapper.find('h1').text()).to.equal('Foo');
        expect(wrapper.find(DayItem)).to.have.length(1);
        wrapper.find(DayItem).simulate('click');
        expect(buttonClick).to.have.property('callCount', 1);
    });

});
