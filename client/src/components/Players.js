import React from 'react';
import Player from './Player';

export default function Players({ playersList }) {
    return (
        <>
            <h1>Players</h1>
            {playersList.map(player => 
                <Player key={player.id} player={player}/>)}
        </>
    )
};