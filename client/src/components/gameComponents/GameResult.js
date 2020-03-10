import React from 'react';

const GameResult = ({playerScore, isQuizFormActive, playAgain, resetPage}) => {
  if (isQuizFormActive) return null;

  return (
    <section>
      <h1>The score is: {playerScore}</h1>
      <button onClick={(playAgain)}>PLAY AGAIN</button>
      <button onClick={(resetPage)}>PICK A NEW PLANT</button>
    </section>
  )
}

export default GameResult;
