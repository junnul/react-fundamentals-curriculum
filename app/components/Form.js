import React, { Component } from 'react';
import PropTypes from 'prop-types';

function SaveButton(props) {
    return <button
        type="button"
        className="btn btn-success mt-2"
        onClick={props.onClick}
    >
        Get Weather
    </button>;
}

SaveButton.propTypes = {
    onClick: PropTypes.func.isRequired
};

function CityInput(props) {
    return <input
            type="text"
            className="form-control mr-auto ml-auto mt-2"
            onChange={props.onChange}
            value={props.value}
            placeholder="St. George, Utah"
        />;
}
CityInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export {SaveButton, CityInput};
