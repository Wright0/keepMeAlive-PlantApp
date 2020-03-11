import React, {Component} from 'react';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';
import NewUser from '../components/keepMeAliveComponents/NewUser.js'

class HomeContainer  extends Component  {
  constructor(props) {
    super(props)
  }

  // localStorage.setItem('playerId', 1)

  checkPlayerIdIsInLocalStorage = () => {
    this.props.players.forEach(player => {
      if (player["id"] !== parseInt(localStorage.getItem('playerId'))) {
        // newUser = <NewUser />
        return <h1> NO ID</h1>
      }
      else {
        // return selectPlant
        return <h1> ID</h1>
      }
    })
  }

  render(){
    return (
      <>
      <h1>HOME CONTAINER</h1>
      {this.checkPlayerIdIsInLocalStorage}
      </>
    )
  }
}
export default HomeContainer;
