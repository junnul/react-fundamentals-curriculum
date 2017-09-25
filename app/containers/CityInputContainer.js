import React, { Component } from 'react';

var SaveButton = props => <button
        type="button"
        className="btn btn-success mt-2"
    >
        Get Weather
    </button>;

var CityInput = props => {
    return <input
            type="text"
            className="form-control mr-auto ml-auto mt-2"
            placeholder="St. George, Utah"
        />;
};

export default class CityInputContainer extends Component {
    render() {
        return <div>
            <CityInput />
            <SaveButton />
        </div>
    }
}
