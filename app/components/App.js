import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
        <Router>
            <div className="h-100">
                <Header />
                <div className="container-fluid m-0 p-0 d-flex w-100 h-100 justify-content-center align-items-center flex-column">
                    <Route exact path="/" component={Home} />
                </div>
            </div>
        </Router>
        )
    }
}
