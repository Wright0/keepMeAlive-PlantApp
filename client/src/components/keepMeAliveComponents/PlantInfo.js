import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import './PlantInfo.css'

const PlantInfo = () => {
  
  const [plant, setPlant] = useState({});

  let { plantId } = useParams()

  const getPlant = () => {
    fetch(`http://localhost:8080/plants/${plantId}`)
      .then(response => response.json())
      .then(plantObject => setPlant(plantObject))
      .catch(err => console.error)
  }

  useEffect( () => {
    getPlant();
  }, [])
  
  return (
    <article className="plant-info">

      <h1>{plant.commonName}</h1>
      <h2>{plant.scientificName}</h2>

      <section className="plant-facts">
        <p>{plant.description}</p>

        <figure>
           <img
              src={plant.plantImageUrl}
              className="select-plant"
              alt={`${plant.commonName} plant.`}
              />
            <figcaption>Keep Me Alive!</figcaption>
        </figure>

      </section>

      

      <section className="plant-care-instructions">
        <h2>Care instructions:</h2>
        <dl>
            <dt>Watering: </dt>
            <dd>You should water this plant about {plant.wateringFrequency} times a month. When the top 2 inches of soil are dry, this is a good time to do it.</dd>

            <dt>Fertilisation: </dt>
            <dd>This plant requires fertilisation {plant.fertilisationFrequency} times a month. The best time to do this is during watering.</dd>

            <dt>Light requirements: </dt>
            <dd>This plant prefers {plant.lightRequirement} light.</dd>

            <dt>Temperature requirements: </dt>
            <dd>This plant thrives in temperatures between {plant.minTemperature}°C and {plant.maxTemperature}°C.</dd>
        </dl>
      </section>

      <div id="plant-info-buttons">
        <Link to={`/${plantId}/game`}><button className="navigate">PLAY</button></Link>
        <Link to={"/"}><button className="navigate">PICK A DIFFERENT PLANT</button></Link> 
      </div>

    </article>
  )
}

export default PlantInfo;
