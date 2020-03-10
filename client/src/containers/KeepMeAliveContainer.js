import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';
import PlantInfo from '../components/keepMeAliveComponents/PlantInfo.js';
import GameContainer from './GameContainer.js';
import SiteHeader from '../components/keepMeAliveComponents/SiteHeader.js';

class KeepMeAliveContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      plants: [],
      selectedPlant: null,
      selectedPlantId: null,
      isGameContainerActive: false,
      isPlantSelected:false
    }
  }

  setSelectedPlantId = (plantId) => {
    this.setState({selectedPlantId: plantId});
  }

  resetSelectedPlant = () => {
    this.setState({selectedPlant: null});
  }

  setIsPlantSelected = (status) => {
    this.setState({isPlantSelected: status})
  }

  setGameStatus = (gameStatus) => {
    this.setState({isGameContainerActive: gameStatus})
  }

  returnToPickAPlant = () => {
    this.resetSelectedPlant(null);
    this.setSelectedPlantId(null);
    this.setIsPlantSelected(false);
  }

  componentDidMount(){
    fetch('http://localhost:8080/plants')
      .then(response => response.json())
      .then(plantsObject => plantsObject._embedded.plants)
      .then(plantsArray => this.setState({plants: plantsArray}))
      .catch(err => console.error)
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevState.selectedPlantId !== this.state.selectedPlantId && this.state.selectedPlantId !== null) {
  //     fetch(`http://localhost:8080/plants/${this.state.selectedPlantId}`)
  //       .then(response => response.json())
  //       .then(plantObject => this.setState({selectedPlant: plantObject}))
  //       .catch(err => console.error)
  //   }
  // }

  render(){
    return (
      <>
        <SiteHeader/>

        <Router>
          <Switch>
            <Route exact path="/" 
            render={() => 
              <SelectPlant
              plants={this.state.plants}
              setSelectedPlantId={this.setSelectedPlantId}
              isPlantSelected={this.state.isPlantSelected}
              setIsPlantSelected={this.setIsPlantSelected}
              />}
            />

          <Route path="/:plantId/game" 
            render={() => 
              <GameContainer
                plant={this.state.selectedPlant}
                isGameActive={this.state.isGameActive}
                setGameStatus={this.setGameStatus}
                setSelectedPlantId={this.setSelectedPlantId}
                setIsPlantSelected={this.setIsPlantSelected}
                resetSelectedPlant={this.resetSelectedPlant}
              />}
            />

          <Route path="/:plantId" 
            component={PlantInfo}
            />
          </Switch>
        </Router>

      </>
    )
  }
}

export default KeepMeAliveContainer;



{/* <SelectPlant
plants={this.state.plants}
setSelectedPlantId={this.setSelectedPlantId}
isPlantSelected={this.state.isPlantSelected}
setIsPlantSelected={this.setIsPlantSelected}
/>



<GameContainer
plant={this.state.selectedPlant}
isGameActive={this.state.isGameActive}
setGameStatus={this.setGameStatus}
setSelectedPlantId={this.setSelectedPlantId}
setIsPlantSelected={this.setIsPlantSelected}
resetSelectedPlant={this.resetSelectedPlant}
/> */}