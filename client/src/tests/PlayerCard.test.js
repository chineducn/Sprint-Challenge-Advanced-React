import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from '../components/PlayerCard';

let tools;
const player = {
    name: 'Grundy',
}

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerCard player={player} />);
})

describe('Player Component', () => {
    it('runs', () => {
        tools.debug();
    })

    it('shows the correct player details', () => {
        expect(tools.queryByText(/grundy/i)).toBeInTheDocument();
    })
})
