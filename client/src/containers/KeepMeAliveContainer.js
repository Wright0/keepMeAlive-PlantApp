import React, { Component } from 'react';
import SelectPlant from '../components/SelectPlant.js';
import PlantInfo from '../components/PlantInfo.js';
import GameContainer from './GameContainer.js';
import HighScores from '../components/HighScores.js';
import ErrorPage from '../components/ErrorPage.js';

class KeepMeAliveContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      plants: [],
      selectedPlant: null,
      selectedPlantId:0
    }
    this.setSelectedPlantId = this.setSelectedPlantId.bind(this)
  }

setSelectedPlantId(plantId){
  this.setState({selectedPlantId: plantId})
}

  componentDidMount(){
    fetch('http://localhost:8080/plants')
      .then(response => response.json())
      .then(plantsObject => plantsObject._embedded.plants)
      .then(plantsArray => this.setState({plants: plantsArray}))
      .catch(err => console.error)
  }

  componentDidUpdate(){
    fetch(`http://localhost:8080/plants/${this.state.selectedPlantId}`)
      .then(response => response.json())
      .then(plantObject => this.setState({selectedPlant: plantObject}))
      .catch(err => console.error)
  }
  //Problem: because the id is set to 0, it tries to fetch the plant with id 0. You can't make it a string, or else the hiding of the object on the other end doesn't work because it sends an empty string.

  render(){
    return (
      <>
      <h1>I am the container of the app</h1>
      <SelectPlant plants={this.state.plants} setSelectedPlantId={this.setSelectedPlantId}/>
      <PlantInfo plant={this.state.selectedPlant}/>
      <GameContainer plant={this.state.selectedPlant}/>
      <ErrorPage/>
      </>
    )
  }
}

export default KeepMeAliveContainer;
