import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Header from '../../app/components/Header';
import App from '../../app/components/App';

describe('App', () => {

    it('renders Header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).to.have.length(1);
        expect(wrapper.find('.container-fluid')).to.have.length(1);
        expect(wrapper.find('.h-100')).to.have.length(2);
    });

});
