import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';

class DayItem extends Component {
    render() {
        return <Isvg src={`/app/images/weather-icons/${this.props.weather.icon}.svg`}>
            <img src={`/app/images/weather-icons/${this.props.weather.icon}.svg`} />
        </Isvg>;
    }
}

DayItem.propTypes = {
    weather: PropTypes.object.isRequired
}

export default DayItem;
