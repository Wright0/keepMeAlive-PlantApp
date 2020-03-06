import React, {useState, useEffect} from 'react';

const PlantInfo = ({selectedPlantId}) => {


  const [plant, setPlant] = useState({})

  useEffect(() => {
    getPlantObject()
  })

  const getPlantObject = () => {
    fetch(`http://localhost:8080/plants/${selectedPlantId}`)
      .then(res => res.json())
      .then(plantObject => setPlant(plantObject))
  }

  return (
    <>
    <h3>This is the selected plant information</h3>
      <h4>Name: {plant.name}</h4>
    </>
  )
}

export default PlantInfo;
