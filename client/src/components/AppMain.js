import React, {Component } from 'react';
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'




class AppMain extends Component {
    state = {
        films: []
    }

    componentDidMount() {
        fetch('/filmsslim')
        .then( res => res.json())
        .then(films => this.setState({ films }))
    }



    render() {
        return (
            <div className='AppMain'>
                <div className='film-view__top'>
                <h1>Films</h1>
                <NavLink to='/film-add'>
                <button className='film-add__button'>Add Film</button>
                </NavLink>
                </div>
                <div className ="film-view">
                    {this.state.films.map(films =>
                        <figure className='filmContainer' key={films._id}>
                            <div className="film-item" key={films.Poster} >
                                <NavLink to={{
                                    pathname: `/film-details/${films._id}`,
                                    state: { filmid: films._id} }}>
                                <img src = { films.Poster } className='film-img'></img>
                                </NavLink>                             
                            <div className='Title'>{films.Title}</div>
                            </div>
                         </figure>
                    )}
                </div>
            </div>
        )
    }

}

    

export default AppMain