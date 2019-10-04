import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Player from '../Player';

let tools;
const person = {
    name: 'Jane',
    country: 'Nigeria',
}

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<Player player={person} />);
});

describe('Player component', () => {
    it('runs', () => {
        tools.debug();
    })

    it('shows the correct player details', () => {
        const nameText = tools.queryByText(/jane/i);
        const countryText = tools.queryByText(/nigeria/i);

        expect(nameText).toBeInTheDocument();
        expect(countryText).toBeInTheDocument();
    });
})