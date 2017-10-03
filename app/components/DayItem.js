import React, { Component } from 'react'
import getDate from '../utils/getDate';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';

class DayItem extends Component {
    render() {
        return <div className="day d-flex flex-column p-4"  onClick={() => this.props.onClick(this.props.day)}>
            <Isvg src={`/app/images/weather-icons/${this.props.day.weather[0].icon}.svg`}>
                <img src={`/app/images/weather-icons/${this.props.day.weather[0].icon}.svg`} />
            </Isvg>
            <div>{getDate(this.props.day.dt)}</div>
        </div>;
    }
}

DayItem.propTypes = {
    day: PropTypes.shape({
        dt: PropTypes.number.isRequired,
        weather: PropTypes.array.isRequired
    })
}

export default DayItem;
