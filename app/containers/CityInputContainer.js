import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SaveButton, CityInput } from '../components/Form';

class CityInputContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({city: event.target.value});
    }

    handleClick(event) {
        event.preventDefault();

        this.context.router.history.push('/forecast/' + this.state.city);
    }

    render() {
        return <div>
            <CityInput value={this.state.city} onChange={this.handleChange} />
            <SaveButton onClick={this.handleClick} />
        </div>
    }
}

CityInputContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

export default CityInputContainer;
