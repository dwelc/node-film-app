import React, {Component} from 'react'

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
                <ul className ="list-group">
                    {this.state.films.map(films =>
                        <li className="list-group-item" key={films.Title}>{films.Title}</li>
                    )}
                </ul>
            </div>
        )
    }

}

    

export default AppMain