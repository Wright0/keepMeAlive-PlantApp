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
    this.addAnswers = this.addAnswers.bind(this)
    this.calculateAndSetGameScore = this.calculateAndSetGameScore.bind(this)
  }
  //The QuizForm will set the state on submit. When the playerAnswers state here changes, this component will calculate the score by comparing the answers to the plant data prop.
  //The score + player's name (date?) will get POSTed to the database at that point (after the score is calculated).
  //This component will then send the score and the player's answers down to the GameResult component.

  addAnswers(answers){
    const updatedPlayerAnswers = {
      wateringFrequency: answers.wateringFrequency,
      fertilisationFrequency: answers.fertilisationFrequency,
      lightRequirement: answers.lightRequirement,
      temperature: answers.temperature
    }
    const updatedPlayerName = answers.playerName

    this.setState({playerAnswers: updatedPlayerAnswers}
      )

    this.setState({playerName: updatedPlayerName})


    const playerIdForPost = "1"
    const plantIdForPost = "1"

    fetch('http://localhost:8080/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        score: 5000,
        plant: `http://localhost:8080/plants/${plantIdForPost}`,
        player: `http://localhost:8080/players/${playerIdForPost}`
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.playerAnswers !== this.state.playerAnswers){
      const score = this.calculateAndSetGameScore()
      this.setState({playerScore: score})
    }
  }

  calculateAndSetGameScore(){

    let score = 0
    if (this.props.plant.wateringFrequency === this.state.playerAnswers.wateringFrequency) {
      console.log("inside watering condition");
      score += 1
    }
    if (this.props.plant.fertilisationFrequency == this.state.playerAnswers.fertilisationFrequency ){
      score +=1
    }
    if (this.props.plant.lightRequirement == this.state.playerAnswers.lightRequirement ){
      score +=1
    }
    if (this.state.playerAnswers.temperature >= this.props.plant.minTemperature &&
      this.state.playerAnswers.temperature <= this.props.plant.maxTemperature ){
      score +=1
    }

    return score
  }

  render(){
    return (
      <>
      <h1>This is the game</h1>
      <GamePlantImage/>

      <QuizForm onAnswersSubmit={this.addAnswers}/>
      <GameResult playerScore={this.state.playerScore}/>

      </>
    )
  }
}
        //plant images sent down as props. Conditional logic that decides which image to send down based on score. + a default plant.
      //playerAnswers + playerScore sent down as a prop. This component is swapped out with Quiz Form on score calculation?

export default GameContainer;
