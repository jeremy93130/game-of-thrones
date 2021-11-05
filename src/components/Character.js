import React, { Component } from 'react';

class Character extends Component {
    render() {
        // const { fullName, imageUrl } = this.props.character
        const { character, favorites, name, image, title } = this.props
        // const { personnage, photo } = this.props.favorite
        return (
            <>
                <div className="flex">
                    <img src={image} />
                    <p> {name}</p>
                    <p> {title}</p>
                    <button type="button" onClick={() => favorites(character)}>Favoris</button>
                </div>


            </>
        );
    }
}

export default Character;