import React from 'react';

export default function SearchForm(props) {
    const { country, changeCountry, popular, changePopular, searchNow } = props;

    
    return (
        <form>
            <div>
                <label htmlFor="countryInput">Country Search</label>
                <input
                    type="text"
                    id='countryInput'
                    name='country'
                    placeholder='Country'
                    onChange={changeCountry}
                    value={country}
                    
                />
                <button type='button' onClick={searchNow} >Search Country</button>
            </div>
            <div>
                <label htmlFor="popularityInput">Popularity Search</label>
                <input
                    type="text"
                    id='popularityInput'
                    name='popularity'
                    placeholder='high/low'
                    onChange={changePopular}
                    value={popular}
                    
                />
                <button type='button' onClick={searchNow}>Search</button>
            </div>

        </form>
    )
}
