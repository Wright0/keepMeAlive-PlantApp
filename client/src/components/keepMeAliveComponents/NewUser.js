import React, {useState} from 'react'
import './NewUser.css'

const NewUser = ({changeIsIdPresent}) => {
  const [name, setName] = useState()  

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
    .then(res => res.json())
    .then(({id}) => setLocalStorageNewUserIdFromDatabase(id))
  }

  const setLocalStorageNewUserIdFromDatabase = (id) => {
      localStorage.setItem('playerId', id)
      changeIsIdPresent(true)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  return (
    <>
    <form className="quiz-player-name" onSubmit={handleNewUserNameEntry}>
      <label htmlFor="playerName" > Enter Player Name: </label>
      <input required className="name-box" type="text" id="playerName" defaultValue={name} onChange={handleNameChange}/>
      <input className="submit-name" type="submit" />
    </form>
    </>
  )
}

export default NewUser
