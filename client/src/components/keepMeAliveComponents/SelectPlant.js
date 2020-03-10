import React from 'react';
import aloeVeraMedium from '../../assets/aloevera2.png';
import './SelectPlant.css';
import { Link } from 'react-router-dom';

const SelectPlant = ({plants, setSelectedPlantId, isPlantSelected, setIsPlantSelected}) => {
if (isPlantSelected) return null;

  function handleSelectedPlant(event){
    setSelectedPlantId(event.target.value);
    setIsPlantSelected(true);
  }

  const plantItems = plants.map(plant => {
    return (
    <Link to={`/${plant.id}`} key={plant.id}>
      <li 
        value={plant.id}
        onClick={ handleSelectedPlant }
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