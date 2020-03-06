import React, {Component} from 'react';
import GameResult from '../components/GameResult.js';
import QuizForm from '../components/QuizForm.js';
import GamePlantImage from '../components/GamePlantImage.js';

class GameContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerAnswers: {
        wateringFrequency: null,
        fertilisationFrequency: null,
        lightRequirement: "",
        temperature: null
      }
    }
  }

  render(){
    return (
      <>
      <h1>This is the game</h1>
      <GamePlantImage/>
      <QuizForm/>
      <GameResult/>
      </>
    )
  }
}

export default GameContainer;
