import React from 'react'
import './HealthBar.css'
function HealthBar({score}) {
  const scoreInPercentage = score * 12.5
  return (
    <div className="health-container">
      <div className="filler" style={{width: `${scoreInPercentage}%`}}/>
    </div>
  )
}
export default HealthBar