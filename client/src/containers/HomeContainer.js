import React, {Component} from 'react';
import SelectPlant from '../components/keepMeAliveComponents/SelectPlant.js';
import NewUser from '../components/keepMeAliveComponents/NewUser.js'

class HomeContainer  extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      isIdPresent: false
    }
  }

  changeIsIdPresent = (status) => {
    this.setState({isIdPresent: status})
  }

  checkPlayerIdIsInLocalStorage = (id) => {
 
    if (parseInt(id) === parseInt(localStorage.getItem('playerId'))) { 
      return <SelectPlant plants={this.props.plants}/>
    } else {
      return <NewUser 
        changeIsIdPresent={this.changeIsIdPresent}
      />
    }
  }

  render(){
    return (
      <>
      <h1>HOME CONTAINER</h1>
      {this.checkPlayerIdIsInLocalStorage(localStorage.getItem('playerId'))}
      </>
    )
  }
}
export default HomeContainer;
