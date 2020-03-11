import React, {Component} from 'react';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';
import NewUser from '../components/keepMeAliveComponents/NewUser.js'

class HomeContainer  extends Component  {
  constructor(props) {
    super(props)
  }

  // localStorage.setItem('playerId', 1)

  checkPlayerIdIsInLocalStorage = () => {
    const array = []
    this.props.players.find(player => {
      if (player["id"] === parseInt(localStorage.getItem('playerId'))) {        
        array.push(player)
      }
    })
    if (array.length >= 1){      
      return <SelectPlant plants={this.props.plants}/>
    } else {
      return <NewUser />
    }
  }

  render(){
    return (
      <>
      <h1>HOME CONTAINER</h1>
      {this.checkPlayerIdIsInLocalStorage()}
      </>
    )
  }
}
export default HomeContainer;
