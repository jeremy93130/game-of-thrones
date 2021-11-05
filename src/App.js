import React, { Component } from 'react';

import Character from './components/Character';
import List from './components/List';
import Continents from './components/Continents';
import Countries from './components/Countries';
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
      continents: []
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.removeFavorite = this.removeFavorite.bind(this)
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

  handleFavoriteClick(character) {
    this.setState({ favorites: [...this.state.favorites, character] })
  }

  removeFavorite(index) {
    const newFavorite = this.state.favorites
    newFavorite.splice(index, 1)
    this.setState({ favorites: newFavorite })
  }


  render() {
    return (
      <>
        <div className="titre">
          <h1>Game Of Thrones</h1>
        </div>

        <div className="thrones">
          {this.state.characters.map((character, index) =>
          (<Character
            character={character}
            key={index}
            title={character.title}
            name={character.fullName}
            image={character.imageUrl}
            favorites={this.handleFavoriteClick}
          />))}
        </div>
        <div className="titre">
          <h2>Favoris</h2>
        </div>
        <div className="thrones">
          {this.state.favorites.map((favorite, index) =>
          (<List
            character={favorite}
            key={index}
            title={favorite.title}
            name={favorite.fullName}
            image={favorite.imageUrl}
            remove={this.removeFavorite}
            i={index}
          />))}
        </div>
        <div className="titre">
          <h2>Continents</h2>
        </div>
        <div className="thrones">
          {this.state.continents.map(continent => (<Continents 
          continent={continent}
          />))}
        </div>





      </>
    );
  }
}

export default App;