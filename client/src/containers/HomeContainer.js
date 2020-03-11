import React, {Component} from 'react';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';
import NewUser from '../components/keepMeAliveComponents/NewUser.js'

class HomeContainer  extends Component  {
  constructor(props) {
    super(props)
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (prevProps !== this.props.players){
  //     this.checkPlayerIdIsInLocalStorage()
  //   }
  // }

  checkPlayerIdIsInLocalStorage = (id) => {
    // const array = []
    // this.props.players.find(player => {
    //   if (player["id"] === parseInt(localStorage.getItem('playerId'))) {        
    //     array.push(player)
    //   }
    // })
    // console.log("im watching for the local storage")
    if (id === parseInt(localStorage.getItem('playerId'))) {      
      return <SelectPlant plants={this.props.plants}/>
    } else {
      console.log("ID DOESNT MATCH")
      return <NewUser 
        checkPlayerIdIsInLocalStorage={this.checkPlayerIdIsInLocalStorage} 
        players={this.props.players} 
        fetchAllPlayers={this.props.fetchAllPlayers}
      />
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
