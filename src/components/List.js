import React, { Component } from 'react';

class List extends Component {
    render() {
        const { character, favorites, name, image, title, remove, i } = this.props
        return (
            <div className="flex">
                <img src={image} />
                <p> {name}</p>
                <p> {title}</p>
                <button type="button" onClick={() => remove(i)}>Retirer Favoris</button>
            </div>

        );
    }
}

export default List;