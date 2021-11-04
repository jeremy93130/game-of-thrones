import React, { Component } from 'react';

class Character extends Component {
    render() {
        const { fullName, title, imageUrl } = this.props.character
        const { favorites } = this.props
        return (
            <>
                <div className="flex">
                    <img src={imageUrl} />
                    <p> {fullName}</p>
                    <p> {title}</p>
                    <button type="button" onClick={favorites} />
                </div>


            </>
        );
    }
}

export default Character;