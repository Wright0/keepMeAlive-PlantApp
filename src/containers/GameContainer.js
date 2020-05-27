import React, {Component} from 'react';
import GameResult from '../components/gameComponents/GameResult.js';
import QuizForm from '../components/gameComponents/QuizForm.js';
import GamePlantImage from '../components/gameComponents/GamePlantImage.js';
import Timer from '../components/gameComponents/Timer.js'
import HealthBar from '../components/gameComponents/HealthBar.js'
import './GameContainer.css';

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
    fetch(`${process.env.REACT_APP_API_URL}/plants/${this.props.match.params.plantId}`)
    .then(response => response.json())
    .then(plantObject => this.setState({plant: plantObject}))
    .catch(err => console.error)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.playerAnswers !== this.state.playerAnswers){
      const score = this.calculateGameScore()
      if (this.state.playerScore > 0) {
        this.setState({playerScore: score})
      }
      if (this.state.playerScore <= 0) {
        this.setState({playerScore: 0}, () => {
          this.setGameInputStatus(false)
        })
      }
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

  reduceScoreByTimer = () => {
    if (this.state.playerScore > 0) {
      this.setState({playerScore: this.state.playerScore -1})
    }
    if (this.state.playerScore <= 0){
      this.setState({playerScore: 0}, () => {
        this.setGameInputStatus(false)
      })
    }
  }

  calculateGameScore = () => {
    let score = this.state.playerScore
    if (this.state.playerAnswers.wateringFrequency !== null ){
      if (this.state.plant.wateringFrequency === this.state.playerAnswers.wateringFrequency) {
        score += 1
      } else {
        score -= 1
      }
      const answer = {wateringFrequency: null}
      const newAnswers = { ...this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if (this.state.playerAnswers.fertilisationFrequency !== null ) {
      if (this.state.plant.fertilisationFrequency === this.state.playerAnswers.fertilisationFrequency ){
        score +=1
      } else {
        score -= 1
      }
      const answer = {fertilisationFrequency: null}
      const newAnswers = { ...this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if( this.state.playerAnswers.lightRequirement !== null) {
      if (this.state.plant.lightRequirement === this.state.playerAnswers.lightRequirement ){
        score +=1
      } else {
        score -= 1
      }
      const answer = {lightRequirement: null}
      const newAnswers = { ...this.state.playerAnswers, ...answer}
      this.setState({playerAnswers: newAnswers})
    }
    if ( this.state.playerAnswers.temperature !== null) {
      if (this.state.playerAnswers.temperature >= this.state.plant.minTemperature &&
        this.state.playerAnswers.temperature <= this.state.plant.maxTemperature ){
          score +=1
        } else { score -= 1 }
        const answer = {temperature: null}
        const newAnswers = { ...this.state.playerAnswers, ...answer}
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
     
      let quizForm = null
      let timer = null
      if (this.state.isQuizFormActive) {
        quizForm = <QuizForm
        isQuizFormActive={this.state.isQuizFormActive}
        defaultGameAnswers = {this.state.playerAnswers}
        onAnswersSubmit={this.addAnswer}
        setGameInputStatus = {this.setGameInputStatus}
        watchAndSetGameStatus = {this.watchAndSetGameStatus}
        />

        timer = <Timer 
          score={this.state.playerScore} 
          reduceScoreByTimer={this.reduceScoreByTimer} 
          setGameInputStatus={this.setGameInputStatus}
        />
      }

      return (
        <section className="game-page">
          
          <h1>{this.state.plant.commonName}</h1>
          
          <section className="game">
            <div className="plant">
              <GamePlantImage playerScore={this.state.playerScore}/>
              <HealthBar score={this.state.playerScore}/>
            </div>

            <div className="game-box">
              {timer}
              {quizForm}
      
              <GameResult
                playerScore={this.state.playerScore}
                isQuizFormActive={this.state.isQuizFormActive}
                resetPlayerAnswers={this.resetPlayerAnswers}
                playAgain={this.playAgain}
              />
            </div>
          </section>  
        </section>
      )
    }
  }

  export default GameContainer;
