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

    it('handles Change event', () => {
        const context = {
            router: { history: [] }
        };
        const wrapper = shallow(<CityInputContainer />, { context });

        const event = {
            target: { value: 'Lorem' }
        };
        wrapper.instance().handleChange(event);

        expect(wrapper.state('city')).to.equal('Lorem');
    });

    it('handles Click event', () => {
        const context = {
            router: {
                history: []
            }
        };
        const wrapper = mount(<CityInputContainer />, { context });
        wrapper.setState({ city: 'Lorem' });
        wrapper.find('button').simulate('click');

        expect(context.router.history[0]).to.equal('/forecast/Lorem');
    });

});
