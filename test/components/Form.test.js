import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon';

import { SaveButton, CityInput } from '../../app/components/Form';

describe('Form', () => {

    it('renders Button', () => {
        const buttonClick = sinon.spy();
        const wrapper = shallow(<SaveButton onClick={buttonClick} />);
        expect(wrapper.find('button')).to.have.length(1);

        wrapper.find('button').simulate('click');
        expect(buttonClick).to.have.property('callCount', 1);
    });

    it('renders input', () => {
        let changeEvent;
        const inputChange = (event) => changeEvent = event;

        const wrapper = shallow(<CityInput value="Foobar" onChange={inputChange} />);
        expect(wrapper.find('input')).to.have.length(1);
        expect(wrapper.find({value: 'Foobar'})).to.have.length(1);
        wrapper.find('input').simulate('change', 'Lorem');

        expect(changeEvent).to.equal('Lorem');
    });

});
