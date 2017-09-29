import React from 'react'
import  { expect } from 'chai';
import { shallow, mount, render } from 'enzyme'
import sinon from 'sinon';
import axios from 'axios';
import api from '../../app/utils/api';

describe('api', () => {

    const promise = Promise.resolve({data: 'Lorem'});
    const stub = sinon.stub(axios, 'get').callsFake(() => promise);

    it('getForecast makes axios request', () => {
        const response = api.getForecast('Foo');

        return response.then(results => expect(results).to.equal('Lorem'));
    });

    it('getWeather makes axios request', () => {
        const response = api.getWeather('Foo');

        return response.then(results => expect(results).to.equal('Lorem'));
    });

});
