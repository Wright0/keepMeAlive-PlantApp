import React from 'react'
import './HealthBar.css'
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
    <div className="health-container">
      <div className={fillerClass()} style={{width: `${scoreInPercentage}%`}}/>
    </div>
  )
}
export default HealthBar