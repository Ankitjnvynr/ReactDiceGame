
import styled from "styled-components";

function RoleDice({currentDice,roleDice}) {

  
 

  return (
    <DiceContainer>
      <div className="dice"
        onClick={roleDice}
      >
        <img src={`images/dice/dice_${currentDice}.png`} alt="dice" />
      </div>
      <p>Click on Dice to roll </p>
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 48px;


.dice{
  cursor: pointer;;
  
}

p{
  font-size: 24px;
}

img{
  width: 200px;
}
`;