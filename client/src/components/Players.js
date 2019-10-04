import React from 'react';
import Player from './Player';
import SearchForm from './SearchForm';
import useInput from '../hooks/useInput';

export default function Players({ playersList }) {
    const [country, setCountry] = useInput('');

    return (
        <>
            <h1>Players</h1>
            <SearchForm />
            {playersList.map(player => 
                <Player key={player.id} player={player}/>)}
        </>
    )
};