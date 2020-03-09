import React from 'react';
import aloeVeraMedium from '../assets/aloevera2.png';
import './PlantInfo.css'

const PlantInfo = ({plant, isGameActive, setGameStatus, returnToPickAPlant}) => {
  if (!plant || isGameActive) return null;

  return (
    <article className="plant-info">
      <h1>{plant.commonName}</h1>
      <section className="plant-facts">
        <div id="plant-scientific-name">
          <p className="care-title">scientific name:</p> 
          <p>{plant.scientificName}</p>
        </div>
        <p>{plant.description}</p>
        <img
        src={aloeVeraMedium}
        alt="Aloe vera plant"
      />
      </section>
      

      <section className="plant-care-instructions">
        <h2>Care instructions:</h2>
        <ul>
          <li>
            <p className="care-title">Watering:</p>
            <p className="care-info">You should water this plant about {plant.wateringFrequency} times a month. When the top 2 inches of soil are dry, this is a good time to do it.</p>
          </li>

          <li>
            <p className="care-title">Fertilisation:</p>
            <p className="care-info">This plant requires fertilisation {plant.fertilisationFrequency} times a month. The best time to do this is during watering.</p>
          </li>

          <li>
            <p className="care-title">Light requirements:</p>
            <p className="care-info">This plant prefers {plant.lightRequirement} light.</p>
          </li>

          <li>
            <p className="care-title">Temperature requirements:</p>
            <p className="care-info">This plant thrives in temperatures between {plant.minTemperature}°C and {plant.maxTemperature}°C.</p>
          </li>
        </ul>
      </section>
      <div>
        <button className="navigate" onClick={() => {setGameStatus(true)}}>PLAY</button>
        <button className="navigate" onClick={returnToPickAPlant}>PICK A DIFFERENT PLANT</button>
      </div>
    </article>
  )
}

export default PlantInfo;
