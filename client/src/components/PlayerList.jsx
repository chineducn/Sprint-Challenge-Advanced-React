import React from 'react';
import PlayerCard from './PlayerCard';

export default class PLayerList extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.playerList.map(player => 
                        <PlayerCard key={player.id} player={player}/>
                    )
                }
            </div>
        )
    }    
}