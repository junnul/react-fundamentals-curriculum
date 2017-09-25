import React, { Component } from 'react';
import CityInputContainer from '../containers/CityInputContainer';

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar justify-content-between">
                <span className="navbar-brand">Weather App</span>
                <form className="form-inline">
                    <CityInputContainer />
                </form>
            </nav>
        );
    }
}
