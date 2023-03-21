import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Routes} from "react-router-dom";
import About from './components/About';
import ContactUs from './components/ContactUs';
import Dairy from './components/Dairy';
import Fertilisers from './components/Fertilisers';
import SupplyChain from './components/SupplyChain';
import './style.css'
import LandingPage from './views/landing-page'
import Seeds from './components/Seeds';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route element={<LandingPage/>}  path="/" />
        <Route element={<ContactUs/>}  path="/contact" />
        <Route element={<SupplyChain/>}  path="/supplychain" />
        <Route element={<About/>}  path="/about" />
          <Route element={<Fertilisers/>}  path="/Fertilisers" />
        <Route element={<Dairy/>}  path="/Dairy" /> 
        <Route element={<Seeds/>} path="/Seeds"/> 
      </Routes>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
