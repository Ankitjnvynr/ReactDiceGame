import React from 'react'
import styled from 'styled-components';
import { Button } from '../styled/Button';

function StartGame({toggle}) {
  return (
    <>
    <Container>
      <img src="/images/diceicon.png" alt="" />
      <div className='content' >
        <h1>Dice Game</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
    </>
  )
}

export default StartGame

const Container = styled.div`
max-width:1080px;
margin: auto;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

.content{
  h1{
    font-size: 96px;
    font-weight: 800;
    white-space: nowrap;
  }
}
`;

