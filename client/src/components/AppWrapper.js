import React, { Component } from 'react'
import AppNavbar from './AppNavBar'
import AppMain from './AppMain'
import AppFilm from './AppFilm'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './AppWrapper.css';

class AppWrapper extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <AppNavbar />
          <Switch>
            <Route exact path='/' component={AppMain} />
            <Route path='/film-details' component={AppFilm} />
          </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default AppWrapper;