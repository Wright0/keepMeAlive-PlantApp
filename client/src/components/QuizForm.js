import React from 'react';

const QuizForm = (props) => {

  return (
      <form>
        <label htmlFor="watering" >Watering Frequency:</label>
        <br/>
        <input type="range" id="watering" min="0" max="10" />
        <br/>
        <label htmlFor="fertilisation" >Fertilisation Frequency:</label>
        <br/>
        <input type="range" id="fertilisation" min="0" max="10" />
        <br/>

        <label htmlFor="light" >Light Requirement:</label>
        <br/>
        <select  id="light">
          <option value="low">Low </option>
          <option value="medium">Medium </option>
          <option value="direct">Direct </option>
        </select>
        <br/>
        <label htmlFor="temperature" >Temperature:</label>
        <br/>
        <input type="range" id="temperature" min="0" max="10" />
        <br/>

      </form>
  )
}

export default QuizForm;
