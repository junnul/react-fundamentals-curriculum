import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import CityInputContainer from '../../app/containers/CityInputContainer';
import Header from '../../app/components/Header';

describe('Header', () => {

    it('renders Header', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(CityInputContainer)).to.have.length(1);
        expect(wrapper.find('nav.navbar')).to.have.length(1);
        expect(wrapper.contains('Weather App')).to.equal(true);
    });

});
