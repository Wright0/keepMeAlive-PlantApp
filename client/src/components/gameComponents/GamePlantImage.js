import React, { useEffect } from 'react';
import './GamePlantImage.css';
import plantHealth0 from '../../assets/0_plantHealth.png';
import plantHealth1 from '../../assets/1_plantHealth.png';
import plantHealth2 from '../../assets/2_plantHealth.png';
import plantHealth3 from '../../assets/3_plantHealth.png';
import plantHealth4 from '../../assets/4_plantHealth.png';
import plantHealth5 from '../../assets/5_plantHealth.png';
import plantHealth6 from '../../assets/6_plantHealth.png';
import plantHealth7 from '../../assets/7_plantHealth.png';
import plantHealth8 from '../../assets/8_plantHealth.png';

const GamePlantImage = ({playerScore}) => {

const setImage = () => {
  let selectedImage = plantHealth0;

  switch(playerScore) {
    case 0:
      selectedImage = plantHealth0;
      break
    case 1:
      selectedImage = plantHealth1;
      break
    case 2:
      selectedImage = plantHealth2;
      break;
    case 3:
      selectedImage = plantHealth3;
      break;
    case 4:
       selectedImage = plantHealth4;
       break;
    case 5:
       selectedImage = plantHealth5;
       break;
    case 6:
      selectedImage = plantHealth6;
      break;
    case 7:
      selectedImage = plantHealth7;
      break;
    case 8:
      selectedImage = plantHealth8;
  }
  return selectedImage;
}

  return (
    <img src={setImage()} alt="Plant Health plant" />
  )
}

export default GamePlantImage;