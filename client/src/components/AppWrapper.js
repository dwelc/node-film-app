import React, { Component } from 'react'
import AppNavbar from './AppNavBar'
import AppMain from './AppMain'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './AppWrapper.css';

class AppWrapper extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <AppMain />
      </div>
    );
  }
}

export default AppWrapper;