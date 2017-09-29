import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Forecast from '../components/Forecast';
import api from '../utils/api';

class ForecastContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecast: { list: [] },
            loading: false,
        };
    }

    componentDidMount() {
        const city = this.props.match.params.city;

        this.makeRequest(city);
    }

    makeRequest(city) {
        this.setState({loading: true});

        api.getForecast(city)
            .then(data => {
                this.setState({
                    forecast: data,
                    city: data.city.name,
                    loading: false,
                });
            });
    }

    render() {
        return this.state.loading
            ? <div>Loading</div>
            : <Forecast city={this.state.city } forecast={this.state.forecast.list} />
    }
}

ForecastContainer.propTypes = {
    match: PropTypes.shape({
        match: PropTypes.shape({
            params: PropTypes.shape({
                city: PropTypes.string.isRequired
            })
        })
    })
};

export default ForecastContainer;
