import React, {Component} from 'react';
import GameResult from '../components/gameComponents/GameResult.js';
import QuizForm from '../components/gameComponents/QuizForm.js';
import GamePlantImage from '../components/gameComponents/GamePlantImage.js';
import Timer from '../components/gameComponents/Timer.js'
import HealthBar from '../components/gameComponents/HealthBar.js'
import './GameContainer.css';
import { useParams, Link } from 'react-router-dom'

class GameContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      plant: {},
      playerName: "",
      playerAnswers: {
        wateringFrequency: null,
        fertilisationFrequency: null,
        lightRequirement: null,
        temperature: null
      },
      playerScore: 4,
      isQuizFormActive:true
    }
  }

  componentDidMount(){
    fetch(`http://localhost:8080/plants/${this.props.match.params.plantId}`)
    .then(response => response.json())
    .then(plantObject => this.setState({plant: plantObject}))
    .catch(err => console.error)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.playerAnswers !== this.state.playerAnswers){
      const score = this.calculateGameScore()
      this.setState({playerScore: score})
      // this.saveGameDataToDb()
    }
  }

  watchAndSetGameStatus = (arrayOfTruthSources) => {
    let truthCount = 0
    arrayOfTruthSources.forEach(item => {
      if (item === false) {
        truthCount += 1
      }
    })
    if (truthCount === 4) {
      this.setGameInputStatus(false)
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
    let score = this.state.playerScore
    if (this.state.playerAnswers.wateringFrequency  ){
      if (this.state.plant.wateringFrequency === this.state.playerAnswers.wateringFrequency) {
        score += 1
      } else {
        score -= 1
      }
      const answer = {wateringFrequency: null}
      const newAnswers = { ... this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if (this.state.playerAnswers.fertilisationFrequency ) {
      if (this.state.plant.fertilisationFrequency === this.state.playerAnswers.fertilisationFrequency ){
        score +=1
      } else {
        score -= 1
      }
      const answer = {fertilisationFrequency: null}
      const newAnswers = { ... this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if( this.state.playerAnswers.lightRequirement ) {
      if (this.state.plant.lightRequirement === this.state.playerAnswers.lightRequirement ){
        score +=1
      } else {
        score -= 1
      }
      const answer = {lightRequirement: null}
      const newAnswers = { ... this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if ( this.state.playerAnswers.temperature) {
      if (this.state.playerAnswers.temperature >= this.state.plant.minTemperature &&
        this.state.playerAnswers.temperature <= this.state.plant.maxTemperature ){
          score +=1
        } else { score -= 1 }
        const answer = {temperature: null}
        const newAnswers = { ... this.state.playerAnswers, ...answer}
        this.setState({playerAnswers: newAnswers})
      }
      return score
    }

    setGameInputStatus = (gameStatus) => {
      this.setState({ isQuizFormActive: gameStatus });
    }

    resetPlayerAnswers = () => {
      const defaultPlayerAnswers = {
        wateringFrequency: null,
        fertilisationFrequency: null,
        lightRequirement: null,
        temperature: null
      }
      this.setState({playerAnswers: defaultPlayerAnswers})
      this.setState({playerScore: 4})
    }

    playAgain = () => {
      this.resetPlayerAnswers()
      this.setGameInputStatus(true)
    }

    render(){
      // if (!this.props.isGameContainerActive) return null;
      let quizForm = null
      if (this.state.isQuizFormActive) {
        quizForm = <QuizForm
        isQuizFormActive={this.state.isQuizFormActive}
        defaultGameAnswers = {this.state.playerAnswers}
        onAnswersSubmit={this.addAnswer}
        setGameInputStatus = {this.setGameInputStatus}
        watchAndSetGameStatus = {this.watchAndSetGameStatus}
        />
      }
      return (
        <section className="game">
        <h2>Let's play:</h2>
        <Timer/>
        <GamePlantImage/>
        <h3>{this.state.plant.commonName}</h3>

        <HealthBar score={this.state.playerScore}/>

        {quizForm}

        <GameResult
        playerScore={this.state.playerScore}
        isQuizFormActive={this.state.isQuizFormActive}
        resetPlayerAnswers={this.resetPlayerAnswers}
        playAgain={this.playAgain}
        />
        </section>
      )
    }
  }

  export default GameContainer;
