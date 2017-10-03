import React from 'react'
import  { expect } from 'chai';
import { shallow } from 'enzyme'
import sinon from 'sinon';
import DayItem from '../../app/components/DayItem';
import Isvg from 'react-inlinesvg';

describe('DayItem', () => {

    it('renders weather icon', () => {
        const day = {dt: 1506592800, weather: [{icon: '01d'}]};
        const buttonClick = sinon.spy();
        const wrapper = shallow(<DayItem day={day} onClick={buttonClick} />);

        expect(wrapper.find(Isvg)).to.have.length(1);
        expect(wrapper.contains(<div>Thursday 28.9.</div>)).to.equal(true);

        wrapper.find('div.flex-column').simulate('click');
        expect(buttonClick).to.have.property('callCount', 1);

    });

});
