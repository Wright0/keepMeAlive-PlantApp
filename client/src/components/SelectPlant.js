import React from 'react';
import aloeVeraMedium from '../assets/aloevera2.png';
import './SelectPlant.css';

const SelectPlant = ({plants, setSelectedPlantId, isPlantSelected, setIsPlantSelected}) => {
if (isPlantSelected) return null;

  function handleSelectedPlant(event){
    setSelectedPlantId(event.target.value);
    setIsPlantSelected(true);
  }

  const plantItems = plants.map(plant => {
    return (
    <li 
      key={plant.id}
      className="select-plant"
      value={plant.id}
      onClick={ handleSelectedPlant }
    >
      <img
        src={aloeVeraMedium}
        className="aloe-vera"
        alt="Aloe vera plant"
      />
      <p className="select-plant">{ plant.commonName }</p>
    </li>
    )
  })

  return (
    <section className="select-plant">
      <h2>SELECT A PLANT:</h2>
      <ul className="select-plant">
        { plantItems }
      </ul>
    </section>
  )
}

export default SelectPlant;