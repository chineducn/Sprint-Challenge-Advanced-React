import React from 'react';

export default function SearchForm(props) {
    const { country, changeCountry, popular, changePopular, searchNow } = props;    
    return (
        <form onSubmit={searchNow}>
            <div>
                <input
                    type="text"
                    id='countryInput'
                    name='country'
                    placeholder='Country'
                    onChange={changeCountry}
                    value={country}                    
                />
                <button type='submit' onClick={searchNow} >Search By Country</button>
            </div>
            <div>
                <input
                    type="text"
                    id='popularityInput'
                    name='popularity'
                    placeholder='high/low'
                    onChange={changePopular}
                    value={popular}                    
                />
                <button type='submit' onClick={searchNow}>Search By Popularity</button>
            </div>
        </form>
    )
}
