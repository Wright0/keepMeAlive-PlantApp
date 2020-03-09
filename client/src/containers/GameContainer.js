import React, {Component} from 'react';
import GameResult from '../components/gameComponents/GameResult.js';
import QuizForm from '../components/gameComponents/QuizForm.js';
import GamePlantImage from '../components/gameComponents/GamePlantImage.js';
import Timer from '../components/gameComponents/Timer.js'
import './GameContainer.css';

class GameContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      playerName: "",
      playerAnswers: {
        wateringFrequency: null,
        fertilisationFrequency: null,
        lightRequirement: null,
        temperature: null
      },
      playerScore: 0,
      isGameInInputStage:true
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.playerAnswers !== this.state.playerAnswers){     
      const score = this.calculateGameScore()
      this.setState({playerScore: score}, () => {
        this.saveGameDataToDb()
      })
      if(this.state.playerAnswers.wateringFrequency && this.state.playerAnswers.fertilisationFrequency && this.state.playerAnswers.lightRequirement && this.state.playerAnswers.temperature){
        this.setGameInputStatus(false)
      }
    }  
  }

  addAnswer = (answer) => {
    const newAnswers = {...this.state.playerAnswers, ...answer}  
    this.setState({playerAnswers: newAnswers})
    
  }

  saveGameDataToDb = () => {
    // Hard coded to test POST to database - to refactor//
    const playerIdForPost = "1"
    const plantIdForPost = "1"

    fetch('http://localhost:8080/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: this.state.playerScore,
        plant: `http://localhost:8080/plants/${plantIdForPost}`,
        player: `http://localhost:8080/players/${playerIdForPost}`
      })
    })
  }

  calculateGameScore = () => {
    let score = 0
    if (this.props.plant.wateringFrequency === this.state.playerAnswers.wateringFrequency) {
      score += 1
    }
    if (this.props.plant.fertilisationFrequency === this.state.playerAnswers.fertilisationFrequency ){
      score +=1
    }
    if (this.props.plant.lightRequirement === this.state.playerAnswers.lightRequirement ){
      score +=1
    }
    if (this.state.playerAnswers.temperature >= this.props.plant.minTemperature &&
      this.state.playerAnswers.temperature <= this.props.plant.maxTemperature ){
      score +=1
    }
    return score
  }

  setGameInputStatus = (gameStatus) => {
    this.setState({ isGameInInputStage: gameStatus });
  }

  resetPage = () => {
    this.props.setGameStatus(false);
    this.setGameInputStatus(true);
    this.props.resetSelectedPlant(null);
    this.props.setSelectedPlantId(null);
    this.props.setIsPlantSelected(false);
  }

  render(){
    if (!this.props.isGameActive) return null;

    return (
      <section className="game">
        <h2>Let's play:</h2>
        <Timer/>
        <GamePlantImage/>

        <QuizForm
          onAnswersSubmit={this.addAnswer}
          isGameInInputStage={this.state.isGameInInputStage}
          setGameInputStatus = {this.setGameInputStatus}
          defaultGameAnswers = {this.state.playerAnswers}
          setGameInputStatus = {this.state.setGameInputStatus}
        />

        <GameResult
          playerScore={this.state.playerScore}
          isGameInInputStage={this.state.isGameInInputStage}
          setGameInputStatus = {this.setGameInputStatus}
          resetPage = {this.resetPage}
        />
      </section>
    )
  }
}

export default GameContainer;
