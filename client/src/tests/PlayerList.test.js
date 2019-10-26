import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from '../components/PlayerList';

let tools;
const players = [
    {
        name: 'Hun',
        id: 1,
    },
    {
        name: 'June',
        id: 2,
    }

]

beforeEach(() => {
    rtl.cleanup();
    tools = rtl.render(<PlayerList playerList={players} />)
})

test('the component runs', () => {
    tools.debug();
})