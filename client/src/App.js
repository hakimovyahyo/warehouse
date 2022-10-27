import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Brand from './app/Brand';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/brands' exact={true} component={Brand}/>
                </Routes>
            </Router>
        )
    }
}

export default App;