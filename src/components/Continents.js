import React, { Component } from 'react';

class Continents extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        fetch("https://thronesapi.com/api/v2/Continents")
            .then(country => country.json())
            .then(country => {
                this.setState({
                    continents: country
                })
            });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Continents;