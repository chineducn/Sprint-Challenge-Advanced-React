import React from 'react';
import PlayerCard from './PlayerCard';
import useAxiosGet from '../hooks/useAxiosGet';

export default () => {
    const playersApi = `http://localhost:5000/api/players`;
    const playerList = useAxiosGet(playersApi, []);

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