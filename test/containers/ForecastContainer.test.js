import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon';
import Forecast from '../../app/components/Forecast';
import ForecastContainer from '../../app/containers/ForecastContainer';
import api from '../../app/utils/api';
describe('ForecastContainer', () => {

    it('makes api request', () => {

        const promise = Promise.resolve({city: {name: 'Foobar'}});
        const stub = sinon.stub(api, 'getForecast').callsFake(() => promise);

        const props = {
            match: {params: {city: 'Foobar'}}
        }
        const wrapper = mount(<ForecastContainer {...props} />);

        expect(wrapper.state('loading')).to.be.true;
        expect(stub.called).to.be.true;
        expect(wrapper.find(Forecast)).to.have.length(1);

        return promise.then(data => {
            expect(wrapper.state('loading')).to.be.false;
            expect(wrapper.state('city')).to.equal('Foobar')
            expect(wrapper.state('forecast').city.name).to.equal('Foobar');
        });
    });

});
