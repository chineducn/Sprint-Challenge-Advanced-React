import React from 'react';
import PlayerCard from './PlayerCard';

export default ({playerList }) => {
    
    return (
        <div>
            {
                playerList.map(player => 
                    <PlayerCard key={player.id} player={player}/>
                )
            }
        </div>
    )
}