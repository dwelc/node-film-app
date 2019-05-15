import React from 'react'


class AppFilmAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', genre: '', release: '', runtime: '', country: '', imdbrating: '', plot: ''
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        let data = this.state
        fetch("/films",
            {
                method: "POST",
                cache: "no-cache",
                headers:{
                    "content_type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then (console.log(data))
            .then(response=> response.json())
      }

    render () {
        return(
            <div>
            <h1 className='film-add__banner'> Add Film</h1>
            <div className='form__wrapper'>
                <form>
                    <label className='form__label'>
                        Title:
                        <input className='form__input' type="text" name='title' value={this.state.title} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        Release Year:
                        <input className='form__input' type="text" name='release' value={this.state.release} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        Genre:
                        <input className='form__input' type="text" name='genre' value={this.state.genre} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        Runtime:
                        <input className='form__input' type="text" name='runtime' value={this.state.runtime} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        Country:
                        <input className='form__input' type="text" name='country' value={this.state.country} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        IMDb Rating:
                        <input className='form__input' type="text" name='imdbrating' value={this.state.imdbrating} onChange={this.handleInputChange} />
                    </label>
                    <label className='form__label'>
                        Plot:
                        <input className='form__input' type="text" name='plot' value={this.state.plot} onChange={this.handleInputChange} />
                    </label>
                
                <button onClick={this.handleSubmit} className='submit__button'>Submit</button>
                </form>
            </div>
            </div>
        )
    }
}

export default AppFilmAdd