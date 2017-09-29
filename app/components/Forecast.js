import React, { Component } from 'react'
import PropTypes from 'prop-types';
import getDate from '../utils/getDate';
import DayItem from './DayItem';

class Forecast extends Component {
    render() {
        return (
        <div className="d-flex flex-column align-items-center mb-auto">
            <h1 className="mt-5 mb-5">{this.props.city}</h1>
            <div className="d-flex">
                {this.props.forecast.map(day => <DayItem key={day.dt} day={day} />)}
            </div>
        </div>
        )
    }
}

Forecast.propTypes = {
    city: PropTypes.string.isRequired,
    forecast: PropTypes.array.isRequired
}

export default Forecast;
