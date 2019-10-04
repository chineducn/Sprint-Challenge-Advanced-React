import React from 'react';

export default function Player({ playersList }) {
    return (
        <>
            <h1>Players</h1>
            {playersList.map(player => 
            <h2 key={player.id}>{player.name}</h2>)}
        </>
    )
};