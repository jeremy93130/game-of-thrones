import React, { Component } from 'react';

class Character extends Component {
    render() {
        // const { fullName, imageUrl } = this.props.character
        const { characters, favorites, name, image, title } = this.props
        // const { personnage, photo } = this.props.favorite
        return (
            <div className="thrones">
                {characters.map((character, index) =>
                (<div className="flex">
                    <img src={character.imageUrl} />
                    <p> {character.name}</p>
                    <p> {character.title}</p>
                    <button type="button" onClick={() => this.props.handleFavoriteClick(character)}>Favoris</button>
                </div>))}
            </div>
        );
    }
}

export default Character;