import React from 'react';
import { Link } from 'react-router-dom';
import './SelectPlant.css';

const SelectPlant = ({plants}) => {

  const plantItems = plants.map(plant => {
    return (
    <Link to={`/plant/${plant.id}`} key={plant.id}>
      <li 
        value={plant.id}
      >
        <img
          src={plant.plantImageUrl}
          className="select-plant"
          alt={`${plant.commonName} plant.`}
        />
        <p>{ plant.commonName }</p>
      </li>
    </Link>
    )
  })

  return (
    <section className="select-plant">
      <p>Learn how to keep different plants alive and then test your knowledge.</p>
      <h2>SELECT A PLANT:</h2>
      <ul>
        { plantItems }
      </ul>
    </section>
  )
}

export default SelectPlant;