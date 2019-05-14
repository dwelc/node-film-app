import React from 'react'

class AppFilm extends React.Component {
    state = {
        activeFilm: []
    }

    componentDidMount = () => {
        const filmid = this.props.location.state.filmid
        fetch(`/film-details?id=${filmid}`)
    }

    render() {
        console.log(this.props)
        return (
            <h1>Film Detail Component!</h1>
        )
    }
}

export default AppFilm