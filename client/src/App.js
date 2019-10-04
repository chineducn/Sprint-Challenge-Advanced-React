import React, { Component } from 'react';
import Players from './components/Players';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playersList: [],
      searchresult: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          playersList: response.data,
          searchresult: response.data,
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Players playersList={this.state.playersList}/>        
      </div>
    );
  }
};
