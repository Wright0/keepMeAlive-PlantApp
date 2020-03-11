import React, {useState, useEffect} from 'react'

const NewUser = ({players}) => {
  const [name, setName] = useState()

  useEffect( () => { setLocalStorageNewUserIdFromDatabase() }, [players.length] )  

  const handleNewUserNameEntry = (event) => {
    event.preventDefault()    
    postNewUserToDataBase()
  }

  const postNewUserToDataBase = () => {
    fetch('http://localhost:8080/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name
      })
    })
  }

  const setLocalStorageNewUserIdFromDatabase = () => {
    const foundPlayer = players.find(player => player["name"] === name)
    if (foundPlayer !== undefined) {
      localStorage.setItem('playerId', foundPlayer.id)
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <>
    <form id="quiz-player-name" onSubmit={handleNewUserNameEntry}>
      <label htmlFor="playerName" > Enter Player Name: </label>
      <input type="text" id="playerName" defaultValue={name} onChange={handleNameChange}/>
      <input type="submit" />
    </form>
    </>
  )
}

export default NewUser
