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
        
        return (
            <div>
            <h1>{this.state.activeFilm.Title}</h1>
            <img src={this.state.activeFilm.Poster} className='detail-poster'/>
            </div>
        )
    }
}

export default AppFilm