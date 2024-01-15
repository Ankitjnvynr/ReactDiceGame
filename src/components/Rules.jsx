import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
   <RulesContainer>
    <h2>Game Rules:-</h2>
    <div className="text">
        <p>- Select a Number</p>
        <p>- Click on dice image</p>
        <p>- If selected number equal to dicee number you will get same point as dice</p>
        <p>- if you get wrong guess then 2 points will be deducted</p>
    </div>
   </RulesContainer>
    
  )
}

export default Rules

const RulesContainer = styled.div`
background-color: #fbf1f1;
padding: 20px;

max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
margin-bottom: 70px;
h2{
    font-size: 24px;

}
.text{
    margin-top: 24px;
}
`;