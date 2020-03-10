import React, { Component } from 'react'

export default class Timer extends Component {

  constructor(props){

    super(props)
    this.state = {
      seconds: 60
    }

  }

  componentDidMount = () => {
    this.myInterval = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1
      }))

      if(this.state.seconds === 0){
        clearInterval(this.myInterval)
        this.props.setGameInputStatus(false)
      }

    }, 1000)

  }

  componentWillUnmount = () => {
    clearInterval(this.myInterval)
  }

  timesUpNotification = () => {
    if(this.state.seconds === 0){
      return <h3>Time's Up</h3>
    }
  }


  render() {
    return (
      <div>
        <h3>Time Remaining: {this.state.seconds} seconds</h3>
        {this.timesUpNotification()}
      </div>
    )
  }
}
