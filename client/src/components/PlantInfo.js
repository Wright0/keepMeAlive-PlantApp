import React, {useState, useEffect} from 'react';

const PlantInfo = ({plant}) => {
  if (!plant) return null;
  return (
    <>
    <h3>This is the selected plant information</h3>
      <h4>Name: {plant.commonName}</h4>
    </>
  )
}

export default PlantInfo;
