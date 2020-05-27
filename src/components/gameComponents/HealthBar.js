import React from 'react'
import './HealthBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'

function HealthBar({score}) {
  const scoreInPercentage = score * 12.5

  const fillerClass = () =>{
    if(score >= 4 && score < 6){
      return "green-filler"
    }
    if(score >= 6){
      return "blue-filler"
    }
    if(score >= 2 && score < 4){
      return "yellow-filler"
    }
    if(score < 2){
      return "red-filler"
    }
  }

  return (
    <section className="health-bar-container">

      <div className="health-bar">
        <div className={fillerClass()} style={{height: `${scoreInPercentage}%`}}/>
      </div>

      <div className="health-bar-icon">
        <FontAwesomeIcon icon={faHeart} />
      </div>
      
    </section>

    


  )
}
export default HealthBar

