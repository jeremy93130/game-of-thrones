import React, { Component } from 'react';

class Continents extends Component {
    constructor() {
        super()

        this.state = {
            continents: []
        }
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
        const { continents } = this.state
        return (
            <div>
                {continents.map(continent => (
                    <div className="flex">
                        <p>{continent.name}</p>
                    
                    </div>
                ))}
            </div>
        );
    }
}

export default Continents;