import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import DayItem from '../../app/components/DayItem';
import Isvg from 'react-inlinesvg';

describe('DayItem', () => {

    it('renders forecast', () => {
        const day = {dt: 1506592800, weather: [{icon: '01d'}]};
        const wrapper = shallow(<DayItem day={day} />);

        expect(wrapper.find(Isvg)).to.have.length(1);
        expect(wrapper.contains(<div>Thursday 28.9.</div>)).to.equal(true);
    });

});
