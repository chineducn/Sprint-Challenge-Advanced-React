import React, { Component } from 'react';
import Players from './components/Players';
import axios from 'axios';

//the app shows the list of player and provides a search function based on country and popularity
// high popularity are players who have had 6 searches and above
// low popularity are players who have had 5 searches and below
// validation still needs to be added to the form
// more testing needed for the components

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playersList: [],
      searchresult: [],
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
  };

  render() {
    return (
      <div className="App">
        <Players playersList={this.state.playersList} />
      </div>
    );
  }
};
