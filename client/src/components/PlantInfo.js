import React, {useState, useEffect} from 'react';

const PlantInfo = ({plantId}) => {

  //Prop will now be the whole plant.


  const [plant, setPlant] = useState({})

  useEffect(() => {
    getPlantObject()
  }, [])

  const getPlantObject = () => {
    fetch(`http://localhost:8080/plants/${plantId}`)
      .then(res => res.json())
      .then(plantObject => setPlant(plantObject))
  }

  //This fetch needs to happen in Keep me Alive container

  return (
    <>
    <h3>This is the selected plant information</h3>
      <h4>Name: {plant.commonName}</h4>
    </>
  )
}

export default PlantInfo;
