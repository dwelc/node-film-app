import React,{Component} from 'react';
import {Route} from 'react-router';
import AppMain from './AppMain';
import AppFilm from './AppFilm'

class AppRouter extends Component {
    render(){
        return (
            <div>
                <Route path="/" component={AppMain}/>
                <Route path="/film-details" component={AppFilm}/>
            </div>
        );
    }
}

export default AppRouter;