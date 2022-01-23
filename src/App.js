import React, { Component } from 'react'
import Dashboard from './pages/Dashboard'
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from './Loader';
import './App.css';
// import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Dashboard/>
        
        </BrowserRouter>
        {/* <Loader/> */}
      </div>
    )
  }
}
