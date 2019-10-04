import React from 'react';
import styled from 'styled-components';



export default function Player(props) {
    const { player } = props;
    const StyledDiv = styled.div`
        .labeler {
            font-weight: bold;
        }
    `

    return (
        <StyledDiv>
            
            <p><span className='labeler'>Name: </span> <span>{player.name}</span> <span className='labeler'>Country: </span><span>{player.country}</span></p>
        </StyledDiv>
    )
};