import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button } from '../styled/Button'
import { OutlineButton } from '../styled/Button'
import Rules from './Rules'

function GamePlay() {

    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error,setError] = useState();
    const [showRule,setShowRule] = useState(false)


    const generaterandomnumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    const roleDice = () => {
        if(!selectedNumber){
            setError("You have not selected a number")
            return;
        }


        const randomNumber = generaterandomnumber(1, 7);
        setCurrentDice((prev) => randomNumber)
        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber)
        } else {
            setScore((prev) => prev - 2)
        }
        setSelectedNumber(undefined)
    }

    const resetScore = ()=>{
        setScore("0")
    }

    return (
        <MainContainer>
            <div className="top_section">
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError = {setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </div>
            <RoleDice
                currentDice={currentDice}
                roleDice={roleDice}

            />
            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset</OutlineButton>
                <Button onClick={()=>setShowRule((prev)=>!prev)} >{showRule ? "hide" :"Show" } Rules</Button>
            </div>
            {showRule && <Rules />}
        </MainContainer>
    )
}

export default GamePlay

const MainContainer = styled.main`


.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
    padding-top: 30px;
}

.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}
`;



