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
      plants: [
        {
          id:1,
          name: "Monstera"
        },
        {
          id:2,
          name: "Rubber Plant"
        }
      ],
      selectedPlantId:1
    }
  }

  render(){
    return (
      <>
      <h1>I am the container of the app</h1>
      <SelectPlant plants={this.state.plants}/>
      <PlantInfo/>
      <GameContainer/>
      <ErrorPage/>
      </>
    )
  }
}

export default KeepMeAliveContainer;
