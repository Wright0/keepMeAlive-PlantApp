import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlantInfo from '../components/keepMeAliveComponents/PlantInfo.js';
import GameContainer from './GameContainer.js';
import SiteHeader from '../components/keepMeAliveComponents/SiteHeader.js';
import HomeContainer from './HomeContainer.js'

class KeepMeAliveContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      plants: [],
      players: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/plants')
      .then(response => response.json())
      .then(plantsObject => plantsObject._embedded.plants)
      .then(plantsArray => this.setState({plants: plantsArray}))
      .catch(err => console.error)
    fetch('http://localhost:8080/players')
      .then(response => response.json())
      .then(playersObject => playersObject._embedded.players)
      .then(playersArray => this.setState({players: playersArray}))
      .catch(err => console.error)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.players !== this.state.players){
      fetch('http://localhost:8080/players')
      .then(response => response.json())
      .then(playersObject => playersObject._embedded.players)
      .then(playersArray => this.setState({players: playersArray}))
      .catch(err => console.error)
    }
  }

  render(){
    return (
      <>
        <Router>
        <SiteHeader/>
          <Switch>
            <Route exact path="/"
              render={() =>
              <HomeContainer
              plants={this.state.plants} players={this.state.players}
              />}
            />
          <Route path="/:plantId/game" component={GameContainer}/>

          <Route path="/:plantId" component={PlantInfo}/>
          </Switch>
        </Router>

      </>
    )
  }
}

export default KeepMeAliveContainer;
