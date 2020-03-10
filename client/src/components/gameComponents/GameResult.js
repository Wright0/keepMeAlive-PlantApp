import React from 'react';

const GameResult = ({playerScore, isGameInInputStage, playAgain, resetPage}) => {
  if (isGameInInputStage) return null;

  return (
    <section>
      <h1>The score is: {playerScore}</h1>
      <button onClick={(playAgain)}>PLAY AGAIN</button>
      <button onClick={(resetPage)}>PICK A NEW PLANT</button>
    </section>
  )
}

export default GameResult;
