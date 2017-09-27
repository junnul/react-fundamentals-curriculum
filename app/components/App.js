import React, { Component } from 'react'
import Header from './Header'
import Home from './Home'

export default class App extends Component {
    render() {
        return (
            <div className="h-100">
                <Header />
                <div className="container-fluid m-0 p-0 d-flex w-100 h-100 justify-content-center align-items-center flex-column">
                    <Home />
                </div>
            </div>
        )
    }
}
