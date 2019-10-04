import React from 'react';

export default function SearchForm(props) {

    const { } = props;
    return (
        <form>
            <div>
                <label htmlFor="countryInput">Country Search</label>
                <input type="text" id='countryInput' name='country' placeholder='Country' />
                <button>Search</button>
            </div>
            <div>
                <label htmlFor="popularityInput">Popularity Search</label>
                <input type="text" id='popularityInput' name='popularity' placeholder='high/low' />
                <button>Search</button>
            </div>

        </form>
    )
}