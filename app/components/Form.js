import React from 'react';

export function SaveButton(props) {
    return <button
        type="button"
        className="btn btn-success mt-2"
    >
        Get Weather
    </button>;
}

export function CityInput(props) {
    return <input
            type="text"
            className="form-control mr-auto ml-auto mt-2"
            onChange={props.onChange}
            value={props.value}
            placeholder="St. George, Utah"
        />;
}
