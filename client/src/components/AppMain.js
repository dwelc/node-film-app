import React, {Component, Router, Link} from 'react'


class AppMain extends Component {
    state = {films: []}

    componentDidMount() {
        fetch('/filmsslim')
        .then( res => res.json())
        .then(films => this.setState({ films }))
    }

    render() {
        return (
            <div className='AppMain'>
                <h1>Films</h1>
                <div className ="film-view">
                    {this.state.films.map(films =>
                        <figure className='filmContainer'>
                            <div className="film-item" key={films.Title} > 
                                <img src = { films.Poster } className='film-img'></img> 
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