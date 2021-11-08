import React, { Component } from 'react';

class List extends Component {
    render() {
        const { character, favorites, name, image, title, remove, i } = this.props
        return (
            <div className="thrones">
                {favorites.map((favorite, index) =>
                (
                        <div className="flex">
                            <img src={favorite.imageUrl} />
                            <p> {favorite.name}</p>
                            <p> {favorite.title}</p>
                            <button type="button" onClick={() => this.props.removeFavorite(index)}>Favoris</button>
                        </div>
                ))}
            </div>

        );
    }
}

export default List;