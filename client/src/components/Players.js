import React, { useState } from 'react';
import Player from './Player';
import SearchForm from './SearchForm';
import useInput from '../hooks/useInput';


export default function Players({ playersList }) {   

    const [country, setCountry, countryChange] = useInput('');
    const [popular, setPopular, popularChange] = useInput('');
    const [searchValue, setSearchValue] = useState('');

    const searchNow = event => {       
        event.preventDefault();        
        setSearchValue(country || popular);
        setCountry('');
        setPopular('');       
    }

    const allPlayers = event => {
        event.preventDefault();
        setSearchValue('');
    }
            
    if (!searchValue) {
        
        return <>
            <h1>Players</h1>
            <SearchForm
                country={country}
                popular={popular}
                changeCountry={countryChange}
                changePopular={popularChange}
                searchNow={searchNow}
                
            />
            <div><button onClick={allPlayers}>Show All Players</button></div>
            {playersList.map(player =>
                <Player key={player.id} player={player} />)}
        </>
    } else if(searchValue==='low') {
        const searchResult = playersList.filter(player => player.searches < 6);
        return (
            <>
                <h1>Players</h1>
                <SearchForm
                    country={country}
                    popular={popular}
                    changeCountry={countryChange}
                    changePopular={popularChange}
                    searchNow={searchNow}
                />
                <div><button onClick={allPlayers}>Show All Players</button></div>
                {searchResult.map(player =>
                    <Player key={player.id} player={player} />)}
            </>
        )

    } else if(searchValue==='high') {
        const searchResult = playersList.filter(player => player.searches > 5);
        return (
            <>
                <h1>Players</h1>
                <SearchForm
                    country={country}
                    popular={popular}
                    changeCountry={countryChange}
                    changePopular={popularChange}
                    searchNow={searchNow}
                />
                <div><button onClick={allPlayers}>Show All Players</button></div>
                {searchResult.map(player =>
                    <Player key={player.id} player={player} />)}
            </>
        )

    } else {
        const searchResult = playersList.filter(player => player.country.toLowerCase().includes(searchValue.toLocaleLowerCase()));
        return (
            <>
                <h1>Players</h1>
                <SearchForm
                    country={country}
                    popular={popular}
                    changeCountry={countryChange}
                    changePopular={popularChange}
                    searchNow={searchNow}
                />
                <div><button onClick={allPlayers}>Show All Players</button></div>
                {searchResult.map(player =>
                    <Player key={player.id} player={player} />)}
            </>
        )
    }
        
};