import React, {Component } from 'react';
import { NavLink } from 'react-router-dom'



class AppMain extends Component {
    state = {films: []}

    componentDidMount() {
        fetch('/filmsslim')
        .then( res => res.json())
        .then(films => this.setState({ films }))
    }

    imageclick = () => {
        console.log('Image Clicked!')
        let id = this.films._id
        console.log(id)
        this.props.history.push('/film-details')
    }

    render() {
        return (
            <div className='AppMain'>
                <h1>Films</h1>
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