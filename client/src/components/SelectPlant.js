import React from 'react';

const SelectPlant = (props) => {

  function handleSelectedPlant(event){
    props.setSelectedPlantId(event.target.value)
  }

  const plantItems = props.plants.map(plant => {
    return <li key={plant.id} value={plant.id} onClick={ handleSelectedPlant }>{plant.commonName}</li>;
  })

return (
  <>
  <h3>Select a plant</h3>

  <ul>
    { plantItems }
  </ul>
  </>
)

}

export default SelectPlant;

//buttons to set the selected plant id
