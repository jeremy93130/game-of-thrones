import React, { Component } from 'react';

class Character extends Component {
    render() {
        const { fullName, title, firstName, lastName, family, imageUrl } = this.props.character
        return (
            <>
                <div className="flex">
                    <img src={imageUrl} />
                    <p> {fullName}</p>
                    <p> {title}</p>
                </div>


            </>
        );
    }
}

export default Character;