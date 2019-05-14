import React from 'react'
import './AppFilm.css'

class AppFilm extends React.Component {
    state = {
        activeFilm: []
    }

    componentDidMount = async () => {
        const filmid = this.props.location.state.filmid
        const req = await fetch (`/film-details?id=${filmid}`)
        const data = await req.json()
        this.setState({activeFilm: data[0]})
        console.log(this.state.activeFilm.Title)
    }

    render() {
        const film = this.state.activeFilm
        return (
            <div>
            <div>
            <img src={film.Poster} className='detail-poster'/>
            </div>
            <div className='active-film__info'>
            <h2 className='active-film__title'>{film.Title}</h2>
            <h3 className='active-film__details'>
                Director: <span>{film.Director}</span>
            </h3>
            <h3 className='active-film__details'>
                Release Year: <span>{film.Year}</span>
            </h3>
            <h3 className='active-film__details'>
                Genre: <span>{film.Genre}</span>
            </h3>
            <h3 className='active-film__details'>
                Runtime: <span>{film.Runtime}</span>
            </h3>          
            <h3 className='active-film__details'>
                Country: <span>{film.Country}</span>
            </h3>
            <h3 className='active-film__details'>
                IMDb Rating: <span>{film.imdbRating}</span>
            </h3>
            <h3 className='active-film__details_plot'>
                Plot: <span>{film.Plot}</span>
            </h3>
            </div>
            </div>
        )
    }
}

export default AppFilm