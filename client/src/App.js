import React, {Component} from 'react';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Brand from './app/Brand';
import BrandEdit from './app/BrandEdit';
import ProductType from './app/ProductType'

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    hop mayli
                    <Route path='/' element={<Home/>}/>
                    <Route path='/brands' element={<Brand/>}/>
                    <Route path='/brands/:id' element={<BrandEdit/>}/>
                    <Route path='/productType' element={<ProductType/>}></Route>
                </Routes>
            </Router>
        )
    }
}

export default App;