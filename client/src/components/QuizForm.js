import React, {Component} from 'react';

class QuizForm extends Component  {
  constructor(props){
    super(props)
    this.state = {
      playerName: "",
      wateringFrequency: 5,
      fertilisationFrequency: 5,
      lightRequirement: "medium",
      temperature: 5
    }
    this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this)
    this.handleWateringFrequencyChange = this.handleWateringFrequencyChange.bind(this)
    this.handleFertilisationFrequencyChange = this.handleFertilisationFrequencyChange.bind(this)
    this.handleLightRequirementChange = this.handleLightRequirementChange.bind(this)
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
    this.handleScoreSubmit = this.handleScoreSubmit.bind(this)
  }

  // handleAuthorChange(event){
  //   this.setState({author: event.target.value})
  // }
  //
  // handleQuoteChange(event){
  //   this.setState({quote: event.target.value})
  // }
  //
  handleScoreSubmit(event){
    event.preventDefault()
    const newAnswers = {
      playerName: this.state.playerName,
      wateringFrequency: this.state.wateringFrequency,
      fertilisationFrequency: this.state.fertilisationFrequency,
      lightRequirement: this.state.lightRequirement,
      temperature: this.state.temperature
    }
    this.props.onAnswersSubmit(newAnswers)
  }

  handlePlayerNameChange(event) {
    this.setState({playerName: event.target.value})
  }
  handleWateringFrequencyChange(event) {
    const newValue = parseInt(event.target.value)
    this.setState({wateringFrequency: newValue})
  }
  handleFertilisationFrequencyChange(event) {
    const newValue = parseInt(event.target.value)
    this.setState({fertilisationFrequency: newValue})
  }
  handleLightRequirementChange(event) {
    this.setState({lightRequirement: event.target.value})
  }
  handleTemperatureChange(event) {
    const newValue = parseInt(event.target.value)
    this.setState({temperature: newValue})
  }
  render(){
    return (
      <form onSubmit={this.handleScoreSubmit}>
        <label htmlFor="playerName" > Enter Player Name: </label>
        <br/>
        <input onChange={this.handlePlayerNameChange} type="text" id="playerName"/>
        <br/>
        <label htmlFor="watering" >Watering Frequency:</label>
        <span>  {this.state.wateringFrequency}</span>
        <br/>
        <input onChange={this.handleWateringFrequencyChange} value={this.state.wateringFrequency} type="range" id="watering" min="0" max="10" />
        <br/>
        <label htmlFor="fertilisation" >Fertilisation Frequency:</label>
        <span>  {this.state.fertilisationFrequency}</span>
        <br/>
        <input onChange={this.handleFertilisationFrequencyChange} value={this.state.fertilisationFrequency} type="range" id="fertilisation" min="0" max="10" />
        <br/>
        <label htmlFor="light" >Light Requirement:</label>
        <span>  {this.state.lightRequirement}</span>
        <br/>
        <select value={this.state.lightRequirement } onChange={this.handleLightRequirementChange} id="light" required>
          <option value="shade" >Shade </option>
          <option value="indirect" >Indirect </option>
          <option value="direct" >Direct </option>
        </select>
        <br/>
        <label htmlFor="temperature" >Temperature:</label>
        <span>  {this.state.temperature}</span>
        <br/>
        <input onChange={this.handleTemperatureChange} value={this.state.temperature} type="range" id="temperature" min="0" max="50" />
        <br/>
        <input type="submit" value="Submit Answers" />
      </form>
    )
  }

}

//2 functions get sent down from Game container: savePlayersAnswers + savePlayersName. These are both used in a function here which bundles answers (event.target.value) into the format we need and send it back up to game container.

export default QuizForm;
