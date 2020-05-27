import React from 'react';
import { Link } from 'react-router-dom'
import './GameResult.css'

const GameResult = ({playerScore, isQuizFormActive, playAgain, resetPlayerAnswers}) => {
  if (isQuizFormActive) return null;

  return (
    <section className="game-result">
      <h1>Game over!</h1>
      <p>Your score is: {playerScore}</p>

      <button className="navigate" onClick={(playAgain)}>PLAY AGAIN</button>
      <Link to={"/"}><button className="navigate" onClick={(resetPlayerAnswers)}>PICK A NEW PLANT</button></Link>
    </section>
  )
}

export default GameResult;
