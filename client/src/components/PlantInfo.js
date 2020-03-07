import React, {useState, useEffect} from 'react';

const PlantInfo = ({plant, isGameActive, startGame}) => {
  if (!plant || isGameActive) return null;

  return (
    <article>
      <h3>This is the selected plant information</h3>
      <h4>Name: {plant.commonName}</h4>

      <button onClick={startGame}>PLAY</button>
    </article>
  )
}

export default PlantInfo;
