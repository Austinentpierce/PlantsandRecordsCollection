import React from 'react'
import { Link } from 'react-router-dom'

export function AddPlant() {
  return (
    <main className="PlantsPage">
      <form className="brown-and-green">
        <p className="form-inputs">
          <label>Name: </label>
          <input placeholder="Enter plant name" />
        </p>
        <p className="form-input">
          <label>Normal plant,Herb, Fruit, Vegetable?: </label>
          <input placeholder="Enter plant type" />
        </p>
        <p className="form-inputs">
          <label>Indoor or Outdoor?: </label>
          <input placeholder="Enter location of plant" />
        </p>
        <p className="form-input">
          <label>Amount of watering: </label>
          <input placeholder="Everyday, Every other day?" />
        </p>
        <p className="form-inputs">
          <label>Pot Number: </label>
          <input placeholder="Enter Pot number plant is in" />
        </p>
        <p className="form-input">
          <label>Description: </label>
          <input placeholder="Describe the plant" />
        </p>
      </form>
      <Link to="/Plants">
        <button className="plantbox">Add Plant</button>
      </Link>
    </main>
  )
}
