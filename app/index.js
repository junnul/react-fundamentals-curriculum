import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Home from './components/Home'

class App extends React.Component {
    render() {
        return (
            <div className="h-100">
                <div className="header">Header</div>
                <div className="container-fluid m-0 p-0 d-flex w-100 h-100 justify-content-center align-items-center flex-column">
                    <Home />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
