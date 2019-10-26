import React from 'react';
import { Card } from '../styles';

export default ({ player }) => {
    return <Card>{player.name}</Card>
}