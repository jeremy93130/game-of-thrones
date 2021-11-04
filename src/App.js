import React, { Component } from 'react';

import Character from './components/Character';
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: []
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => {
        this.setState({
          characters: result
        })
      });
  }

  handleFavoriteClick() { }


  render() {
    return (
      <>
        <div className="titre">
          <h1>Game Of Thrones</h1>
        </div>

        <div className="thrones">
          {this.state.characters.map(character => (<Character character={character} name={character.fullName} />))}
        </div>




      </>
    );
  }
}

export default App;