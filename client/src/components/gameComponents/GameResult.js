import React from 'react';
import { Link } from 'react-router-dom'

const GameResult = ({playerScore, isQuizFormActive, playAgain, resetPlayerAnswers}) => {
  if (isQuizFormActive) return null;

  return (
    <section>
      <h1>The score is: {playerScore}</h1>
      <button onClick={(playAgain)}>PLAY AGAIN</button>
      <Link to={"/"}><button onClick={(resetPlayerAnswers)}>PICK A NEW PLANT</button></Link>
    </section>
  )
}

export default GameResult;
