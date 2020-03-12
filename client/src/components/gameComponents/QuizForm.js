import React, {Component} from 'react';
import './QuizForm.css'

class QuizForm extends Component  {
  constructor(props){
    super(props)
    this.state = {
      playerName: null,
      wateringFrequency: null,
      fertilisationFrequency: null,
      lightRequirement: null,
      temperature: null,
      wateringFrequencyButtonActive: true,
      fertilisationFrequencyButtonActive: true,
      lightRequirementButtonActive: true,
      temperatureButtonActive: true
    }
  }

  componentDidMount(){
    this.resetSubmitButtons()
  }

  handleScoreSubmit = ( propertyName) => {
    if ((propertyName === "lightRequirement" && this.validateLightInput() === false) ||
    (propertyName === "wateringFrequency" && this.validateWateringFrequencyInput() === false) ||
    (propertyName === "fertilisationFrequency" && this.validateFertilisationFrequencyInput() === false) ||
    (propertyName === "temperature" && this.validateTemperatureInput() ===false) ){
      return;
    }
    else {
      const currentButtonName = `${propertyName}ButtonActive`
      this.setState({[currentButtonName]: false}, () => {
        const newPropertyValue = this.state[propertyName]
        const answersKeysArray = Object.keys(this.state)
        answersKeysArray.forEach(key => {
          if (key === propertyName){
            this.props.onAnswersSubmit({[propertyName]: newPropertyValue})
          }
        })
        const arrayOfButtonTruth = [ this.state.wateringFrequencyButtonActive, this.state.fertilisationFrequencyButtonActive, this.state.lightRequirementButtonActive, this.state.temperatureButtonActive]
        this.props.watchAndSetGameStatus(arrayOfButtonTruth)
      })
    }
    // this.props.setGameInputStatus(false)
  }

  resetSubmitButtons = () => {
    this.setState({wateringFrequencyButtonActive: true})
    this.setState({fertilisationFrequencyButtonActive: true})
    this.setState({lightRequirementButtonActive: true})
    this.setState({temperatureButtonActive: true})
  }

  renderAnswerSubmitButton = (propertyName) => {
    const currentButtonName = `${propertyName}ButtonActive`
    if(this.state[currentButtonName] === true){
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

  validateLightInput = () => {
    if (this.state.lightRequirement === null) {
      alert("Light requirement must be selected");
      return false;
    }
  }

  validateWateringFrequencyInput = () => {
    if (this.state.wateringFrequency === null) {
      alert("Please drag the slider to select a value before submitting");
      return false;
    }
  }

  validateFertilisationFrequencyInput = () => {
    if (this.state.fertilisationFrequency === null) {
      alert("Please drag the slider to select a value before submitting");
      return false;
    }
  }

  validateTemperatureInput = () => {
    if (this.state.temperature === null) {
      alert("Please drag the slider to select a value before submitting");
      return false;
    }
  }

  render(){
    if (!this.props.isQuizFormActive) return null;

    return (
      <article className="plant-quiz">

        <p>What does this plant need?</p>


      <div id="quiz-watering">
        <label htmlFor="watering" >Waterings a month:</label>
        <p>{this.state.wateringFrequency}</p>
        <input onChange={this.handleWateringFrequencyChange} defaultValue={this.state.wateringFrequency} type="range" id="watering" min="0" max="8" />
        {this.renderAnswerSubmitButton("wateringFrequency")}
      </div>

      <div id="quiz-fertilisation">
        <label htmlFor="fertilisation" >Fertilisations a month:</label>
        <p>{this.state.fertilisationFrequency}</p>
        <input onChange={this.handleFertilisationFrequencyChange} defaultValue={this.state.fertilisationFrequency} type="range" id="fertilisation" min="0" max="8" />
        {this.renderAnswerSubmitButton("fertilisationFrequency")}
      </div>

      <div id="quiz-light">
        <p>Light:</p>
        
        <input type="radio" id="shade" name="light-requirements" value="shade" onChange={this.handleLightRequirementChange}/>
        <label htmlFor="shade">Shade</label>
        
        <input type="radio" id="indirect" name="light-requirements" value="indirect" onChange={this.handleLightRequirementChange}/>
        <label htmlFor="indirect">Indirect light</label>

        <input type="radio" id="direct" name="light-requirements" value="direct" onChange={this.handleLightRequirementChange}/>
        <label htmlFor="direct">Direct Light</label>
    
        {this.renderAnswerSubmitButton("lightRequirement")}
      </div>
      

      <div id="quiz-temperature">
        <label htmlFor="temperature" >Temperature:</label>
        <p>{this.state.temperature}</p>
        <input onChange={this.handleTemperatureChange} defaultValue={this.state.temperature} type="range" id="temperature" min="0" max="35" />
        {this.renderAnswerSubmitButton("temperature")}
      </div>

      </article>
    )
  }

}

//2 functions get sent down from Game container: savePlayersAnswers + savePlayersName. These are both used in a function here which bundles answers (event.target.value) into the format we need and send it back up to game container.

export default QuizForm;
