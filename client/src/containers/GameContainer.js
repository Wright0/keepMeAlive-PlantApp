import React, {Component} from 'react';
import GameResult from '../components/GameResult.js';
import QuizForm from '../components/QuizForm.js';
import GamePlantImage from '../components/GamePlantImage.js';

class GameContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerName: "",
      playerAnswers: {
        wateringFrequency: null,
        fertilisationFrequency: null,
        lightRequirement: "",
        temperature: null
      },
      playerScore: 0
    }
  }
  //The QuizForm will set the state on submit. When the playerAnswers state here changes, this component will calculate the score by comparing the answers to the plant data prop.
  //The score + player's name (date?) will get POSTed to the database at that point (after the score is calculated).
  //This component will then send the score and the player's answers down to the GameResult component.

  render(){
    return (
      <>
      <h1>This is the game</h1>
      <GamePlantImage/>
      //plant images sent down as props. Conditional logic that decides which image to send down based on score. + a default plant.
      <QuizForm/>
      <GameResult/>
      //playerAnswers + playerScore sent down as a prop. This component is swapped out with Quiz Form on score calculation?
      </>
    )
  }
}

export default GameContainer;
