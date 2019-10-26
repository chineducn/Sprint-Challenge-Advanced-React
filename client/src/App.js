import React from 'react';
import PlayerList from './components/PlayerList';
import './App.css';
import useAxiosGet from './hooks/useAxiosGet';

function App() {
  const playersApi = `http://localhost:5000/api/players`;
  const playerList = useAxiosGet(playersApi, []);
  return (
    <div className="App-header">
      <PlayerList playerList={playerList}/>
    </div>
  );
}

export default App;
