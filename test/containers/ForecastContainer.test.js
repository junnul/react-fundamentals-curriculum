import React from 'react'
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon';
import Forecast from '../../app/components/Forecast';
import ForecastContainer from '../../app/containers/ForecastContainer';
import api from '../../app/utils/api';

describe('ForecastContainer', () => {

    const promise = Promise.resolve({city: {name: 'Foobar'}});
    const stub = sinon.stub(api, 'getForecast').callsFake(() => promise);

    it('makes api request', () => {

        const props = {
            match: {params: {city: 'Foobar'}, list: []}
        }
        const buttonClick = sinon.spy();
        const wrapper = mount(<ForecastContainer {...props} onClick={buttonClick} />);

        expect(wrapper.state('loading')).to.be.true;
        expect(stub.called).to.be.true;
        expect(wrapper.find(Forecast)).to.have.length(1);

        return promise.then(data => {
            expect(wrapper.state('loading')).to.be.false;
            expect(wrapper.state('city')).to.equal('Foobar')
            expect(wrapper.state('forecast').city.name).to.equal('Foobar');
        });
    });

    it('handles click events', () => {

        let urlResult, dataResult;
        const props = {
            match: {params: {city: 'Foobar'}},
            history: {push: (url, data) => {
                urlResult = url;
                dataResult = data
            }}
        }
        const buttonClick = sinon.spy();
        const context = {router: { history: [] }};
        const wrapper = shallow(<ForecastContainer {...props} onClick={buttonClick} />, {context});

        return promise.then(data => {
            wrapper.instance().handleClick({foo: 'bar'})
            expect(urlResult).to.equal('/forecast/Foobar/detail');
            expect(dataResult.day.foo).to.equal('bar');
        });
    });

});
