import React, { Component } from 'react';

import Characters from './components/Characters';

class App extends Component {
  constructor() {
    super()

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(response => response.json())
      .then(result => {
        this.setState({
          characters: result.results
        })
      });
  }


  render() {
    return (
      <div>
        <h1>Game of thrones</h1>
        <Characters />
      </div>
    );
  }
}

export default App;