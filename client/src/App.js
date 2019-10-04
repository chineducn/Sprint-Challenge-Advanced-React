import React, { Component } from 'react';
import Players from './components/Players';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Players />        
      </div>
    );
  }
};
