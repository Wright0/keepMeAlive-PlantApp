import React from 'react';

const SelectPlant = ({plants}) => {

  const plantItems = plants.map(plant => {
    return <li key={plant.id}>{plant.name}</li>;
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
