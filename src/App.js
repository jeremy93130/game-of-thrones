import React, { Component } from 'react';

import Character from './components/Character';
import List from './components/List';
import Continents from './components/Continents';
import Buttons from './components/Buttons';
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: [],
      favorites: [],
      activeTab: "personnages",
      select: false
    }

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.removeFavorite = this.removeFavorite.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
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

  handleButtonClick(tab) {
    this.setState({ activeTab: tab })
  }



  render() {
    const { activeTab, select } = this.state
    return (
      <>
        <div className="titre">
          <h1>Game Of Thrones</h1>
        </div>

        <Buttons
          isSelected={activeTab === "personnage"}
          handleButtonClick={this.handleButtonClick}
          text="personnage"
        />

        {activeTab === "personnage" &&
          <Character characters={this.state.characters} handleFavoriteClick={this.handleFavoriteClick} />
        }



        <div className="titre">
          <h2>Favoris</h2>
        </div>

        <Buttons
          isSelected={activeTab === "favoris"}
          handleButtonClick={this.handleButtonClick}
          text="favoris"
        />

        {activeTab === "favoris" &&
          <List favorites={this.state.favorites} removeFavorite={this.removeFavorite} />
        }

        <div className="titre">
          <h2>Continents</h2>
        </div>

        <Buttons
          isSelected={activeTab === "continents"}
          handleButtonClick={this.handleButtonClick}
          text="continents"
        />

        {activeTab === "continents"
          && <Continents continents={this.state.continents} />
        }


      </>
    );
  }
}

export default App;