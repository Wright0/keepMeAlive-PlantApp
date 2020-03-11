import React, {useState} from 'react'

const NewUser = () => {
  const [name, setName] = useState()

  return (
    <>
    <div id="quiz-player-name">
      <label htmlFor="playerName" > Enter Player Name: </label>
      <input  type="text" id="playerName"/>
    </div>
    </>
  )
}

export default NewUser
