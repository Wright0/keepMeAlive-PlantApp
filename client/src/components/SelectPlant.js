import React from 'react';

const SelectPlant = ({plants, setSelectedPlantId, isPlantSelected, setIsPlantSelected}) => {
if (isPlantSelected) return null;

  function handleSelectedPlant(event){
    setSelectedPlantId(event.target.value);
    setIsPlantSelected(true);
  }

  const plantItems = plants.map(plant => {
    return <li key={plant.id} value={plant.id} onClick={ handleSelectedPlant }>{plant.commonName}</li>;
  })

  return (
    <section>
      <h3>Select a plant</h3>
      <ul>
        { plantItems }
      </ul>
    </section>
  )
}

export default SelectPlant;

//buttons to set the selected plant id
