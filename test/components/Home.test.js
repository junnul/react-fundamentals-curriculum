import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'

import Home from '../../app/components/Home';
import CityInputContainer from '../../app/containers/CityInputContainer';

describe('Home', () => {

    it('renders CityInputContainer', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.find(CityInputContainer)).to.have.length(1);
    });

});
