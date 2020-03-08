import React, {useState, useEffect} from 'react';

const PlantInfo = ({plant, isGameActive, setGameStatus, returnToPickAPlant}) => {
  if (!plant || isGameActive) return null;

  return (
    <article>
      <h1>{plant.commonName}</h1>
      <p>scientific name: {plant.scientificName}</p>
      <p>{plant.description}</p>
      <h2>Care instructions:</h2>
      <ul>
        <li>
          <p className="care-title">Watering:</p>
          <p>You should water this plant about {plant.wateringFrequency} times a month. When the top 2 inches of soil are dry, this is a good time to do it.</p>
        </li>

        <li>
          <p className="care-title">Fertilisation:</p>
          <p>This plant requires fertilisation {plant.fertilisationFrequency} times a month. The best time to do this is during watering.</p>
        </li>

        <li>
          <p className="care-title">Light requirements:</p>
          <p>This plant prefers {plant.lightRequirement} light.</p>
        </li>

        <li>
          <p className="care-title">Temperature requirements:</p>
          <p>This plant thrives in temperatures between {plant.minTemperature}°C and {plant.maxTemperature}°C.</p>
        </li>
      </ul>

      <button onClick={() => {setGameStatus(true)}}>PLAY</button>
      <button onClick={returnToPickAPlant}>PICK A DIFFERENT PLANT</button>
    </article>
  )
}

export default PlantInfo;
