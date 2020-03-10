import React from 'react';
import aloeVeraMedium from '../../assets/aloevera2.png';
import { Link } from 'react-router-dom';
import './SelectPlant.css';

const SelectPlant = ({plants}) => {

  const plantItems = plants.map(plant => {
    return (
    <Link to={`/${plant.id}`} key={plant.id}>
      <li 
        value={plant.id}
      >
        <img
          src={aloeVeraMedium}
          className="aloe-vera"
          alt="Aloe vera plant"
        />
        <p>{ plant.commonName }</p>
      </li>
    </Link>
    )
  })

  return (
    <section className="select-plant">
      <h2>SELECT A PLANT:</h2>
      <ul>
        { plantItems }
      </ul>
    </section>
  )
}

export default SelectPlant;