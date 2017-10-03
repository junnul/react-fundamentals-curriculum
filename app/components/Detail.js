import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DayItem from './DayItem';

class Details extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.state == null) {
            document.location = '/forecast/' + this.props.match.params.city;
        }
    }
    render() {
        if (this.props.location.state == null) {
            return;
        }
        const detail = this.props.location.state.day;
        return <div className="d-flex flex-column align-items-center mb-auto">
            <DayItem key={detail.dt} day={detail} />
            <h3>{this.props.match.params.city}</h3>
            <p>{detail.weather[0].description}</p>
            <p>min temp: {detail.temp.min} &#176;C</p>
            <p>max temp: {detail.temp.max} &#176;C</p>
            <p>humidity: {detail.humidity}</p>
        </div>;
    }
}

DayItem.propTypes = {
    match: PropTypes.shape({
        match: PropTypes.shape({
            params: PropTypes.shape({
                city: PropTypes.string.isRequired
            })
        })
    })
}

export default Details;
