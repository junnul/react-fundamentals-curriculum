import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import DayItem from '../../app/components/DayItem';
import Isvg from 'react-inlinesvg';

describe('DayItem', () => {

    it('renders forecast', () => {
        const weather = {icon: '01d'};
        const wrapper = shallow(<DayItem weather={weather} />);

        expect(wrapper.find(Isvg)).to.have.length(1);
    });

});
