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
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const city = this.props.match.params.city;

        this.makeRequest(city);
    }

    componentWillReceiveProps(nextProps) {
        const city = nextProps.match.params.city;

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

    handleClick(day) {
        this.props.history.push('/forecast/' + this.state.city + '/detail', {day});
    }

    render() {
        return this.state.loading
            ? <div>Loading</div>
            : <Forecast
                city={this.state.city }
                forecast={this.state.forecast.list}
                onClick={this.handleClick} />
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
ForecastContainer.contextTypes = {
    router: PropTypes.object.isRequired
};

export default ForecastContainer;
