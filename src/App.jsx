
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";
import { useState } from "react";


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toogleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
    console.log("hii")
  }


  return (
    <>
      {isGameStarted ? <GamePlay />: <StartGame toggle = {toogleGamePlay} />}
      
    </>
  )
}

export default App


