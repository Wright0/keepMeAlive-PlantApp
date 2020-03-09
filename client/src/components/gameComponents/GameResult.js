import React from 'react';

const GameResult = ({playerScore, isGameInInputStage, setGameInputStatus, resetPage}) => {
  if (isGameInInputStage) return null;

  return (
    <section>
      <h1>The score is: {playerScore}</h1>
      <button onClick={() => {setGameInputStatus(true)}}>PLAY AGAIN</button>
      <button onClick={(resetPage)}>PICK A NEW PLANT</button>
    </section>
  )
}

export default GameResult;


    //I will show the results.
    // 2 buttons: Go home, play again.
    // Go home: goes back to main selector
    // Play again goes back to the PlantInfo

    //Whichever they select, state gets reset in the GameContainer?
    //After this component is destroyed?
    //Can the props persist if the state is cleared? To discover.
