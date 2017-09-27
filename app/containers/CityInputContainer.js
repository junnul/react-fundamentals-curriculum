import React, { Component } from 'react';
import { SaveButton, CityInput } from '../components/Form';

export default class CityInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.cityChange = this.cityChange.bind(this);
    }

    cityChange(event) {
        this.setState({city: event.target.value});
    }

    render() {
        return <div>
            <CityInput value={this.state.city} onChange={this.cityChange} />
            <SaveButton />
        </div>
    }
}
