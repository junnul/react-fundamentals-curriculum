import React, { Component } from 'react';
import CityInputContainer from '../containers/CityInputContainer';

export default class Home extends Component {
    render() {
        return <div className="text-center">
            <h1>Enter a City and State</h1>
            <CityInputContainer />
        </div>
    }
}
