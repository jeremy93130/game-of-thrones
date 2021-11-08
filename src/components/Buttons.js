import React, { Component } from 'react';
import Character from './Character';

class Buttons extends Component {
    constructor() {
        super()
    }
    render() {
        const { handleButtonClick, text, isSelected } = this.props
        return (
            <div>
                <button onClick={() => handleButtonClick(text)} >{text}</button>
            </div>
        );
    }
}

export default Buttons;