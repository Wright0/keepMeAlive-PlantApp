import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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

  fetchAllPlayers = () => {
      fetch('http://localhost:8080/players')
      .then(response => response.json())
      .then(playersObject => playersObject._embedded.players)
      .then(playersArray => this.setState({players: playersArray}))
      .catch(err => console.error)
  }

  isPlayerIdInLocalstorage = () => {
    if(this.state.players.find(player => {
      return player.id === parseInt(localStorage.getItem('playerId'))
    }
    )){
      return true
    } else {
      return false
    }
  }

  render(){
    if(!this.state.players.length){
      return null
    }

    return (
      <>
        <Router>
        <SiteHeader/>
          <Switch>
            <Route exact path="/"
              render={() =>
              <HomeContainer
              plants={this.state.plants} players={this.state.players} fetchAllPlayers={this.fetchAllPlayers}
              />}
            />
            <Route path="/:plantId/game" render={({match}) => this.isPlayerIdInLocalstorage() ?<GameContainer match={match} /> : <Redirect to="/" />} />
     

            <Route exact path="/:plantId" render={({match}) => this.isPlayerIdInLocalstorage() ?<PlantInfo match={match} /> : <Redirect to="/" />} />
          </Switch>
        </Router>

      </>
    )
  }
}

export default KeepMeAliveContainer;
