import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'

import { SaveButton, CityInput } from '../../app/components/Form';
import CityInputContainer from '../../app/containers/CityInputContainer';

describe('CityInputContainer', () => {

    it('renders Button', () => {
        const wrapper = shallow(<CityInputContainer />);
        expect(wrapper.find(SaveButton)).to.have.length(1);
        expect(wrapper.find(CityInput)).to.have.length(1);
    });

});
