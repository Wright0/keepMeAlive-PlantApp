import React, { Component } from 'react';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';

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
      <SelectPlant plants={this.state.plants}/>
    )
  }
}

export default KeepMeAliveContainer;
