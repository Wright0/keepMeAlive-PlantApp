import React, {Component} from 'react';

class QuizForm extends Component  {
  constructor(props){
    super(props)
    this.state = {
      playerName: null,
      wateringFrequency: null,
      fertilisationFrequency: null,
      lightRequirement: null,
      temperature: null
    }
  }

  handleScoreSubmit = ( propertyName) => {
    const newPropertyValue = this.state[propertyName]
    const answersKeysArray = Object.keys(this.state)
    answersKeysArray.forEach(key => {
      if (key === propertyName){
        this.props.onAnswersSubmit({[propertyName]: newPropertyValue})
      }
    })

    // this.props.setGameInputStatus(false)
  }

  renderAnswerSubmitButton = (propertyName) => {
    if(this.props.defaultGameAnswers[propertyName] === null){
      return <button onClick={() => {this.handleScoreSubmit( propertyName)}}>Submit</button>
    }
  }

  handlePlayerNameChange = (event) => {
    this.setState({playerName: event.target.value})
  }
  handleWateringFrequencyChange = (event) => {
    const newValue = parseInt(event.target.value)
    this.setState({wateringFrequency: newValue})
  }
  handleFertilisationFrequencyChange = (event) => {
    const newValue = parseInt(event.target.value)
    this.setState({fertilisationFrequency: newValue})
  }
  handleLightRequirementChange = (event) => {
    this.setState({lightRequirement: event.target.value})
  }
  handleTemperatureChange = (event) => {
    const newValue = parseInt(event.target.value)
    this.setState({temperature: newValue})
  }
  render(){
    if (!this.props.isGameInInputStage) return null;

    return (
      <>
        <label htmlFor="playerName" > Enter Player Name: </label>
        <br/>
        <input onChange={this.handlePlayerNameChange} type="text" id="playerName"/>
        <br/>
        <label htmlFor="watering" >Watering Frequency:</label>
        <span>  {this.state.wateringFrequency}</span>
        <br/>
        <input onChange={this.handleWateringFrequencyChange} value={this.state.wateringFrequency} type="range" id="watering" min="0" max="10" />
        {this.renderAnswerSubmitButton("wateringFrequency")}
        <br/>
        <label htmlFor="fertilisation" >Fertilisation Frequency:</label>
        <span>  {this.state.fertilisationFrequency}</span>
        <br/>
        <input onChange={this.handleFertilisationFrequencyChange} value={this.state.fertilisationFrequency} type="range" id="fertilisation" min="0" max="10" />
        {this.renderAnswerSubmitButton("fertilisationFrequency")}
        <br/>
        <label htmlFor="light" >Light Requirement:</label>
        <span>  {this.state.lightRequirement}</span>
        <br/>
        <select value={this.state.lightRequirement } onChange={this.handleLightRequirementChange} id="light" required>
          <option value="shade" >Shade </option>
          <option value="indirect" >Indirect </option>
          <option value="direct" >Direct </option>
        </select>
        {this.renderAnswerSubmitButton("lightRequirement")}
        <br/>
        <label htmlFor="temperature" >Temperature:</label>
        <span>  {this.state.temperature}</span>
        <br/>
        <input onChange={this.handleTemperatureChange} value={this.state.temperature} type="range" id="temperature" min="0" max="50" />
        {this.renderAnswerSubmitButton("temperature")}
        <br/>
      </>
    )
  }

}

//2 functions get sent down from Game container: savePlayersAnswers + savePlayersName. These are both used in a function here which bundles answers (event.target.value) into the format we need and send it back up to game container.

export default QuizForm;
