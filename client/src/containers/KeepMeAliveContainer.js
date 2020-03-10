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
      plants: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:8080/plants')
      .then(response => response.json())
      .then(plantsObject => plantsObject._embedded.plants)
      .then(plantsArray => this.setState({plants: plantsArray}))
      .catch(err => console.error)
  }

  render(){
    return (
      <>
        <Router>
        <SiteHeader/>
          <Switch>
            <Route exact path="/" 
            render={() => 
              <SelectPlant
              plants={this.state.plants}
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