import React from 'react'
import { Link } from 'react-router-dom'

export function AddPlant() {
  return (
    <main className="AddPagePlants">
      <form>
        <p className="form-inputs">
          <label>Name: </label>
          <input className="G" placeholder="Enter plant name" />
        </p>
        <p className="form-input">
          <label>Normal plant,Herb, Fruit, Vegetable?: </label>
          <input className="B" placeholder="Enter plant type" />
        </p>
        <p className="form-inputs">
          <label>Indoor or Outdoor?: </label>
          <input className="G" placeholder="Enter location of plant" />
        </p>
        <p className="form-input">
          <label>Amount of watering: </label>
          <input className="B" placeholder="Everyday, Every other day?" />
        </p>
        <p className="form-inputs">
          <label>Pot Number: </label>
          <input className="G" placeholder="Enter Pot number plant is in" />
        </p>
        <p className="form-input">
          <label>Description: </label>
          <input className="B" placeholder="Describe the plant" />
        </p>
      </form>
      <Link to="/Plants">
        <button className="plantbox">Add Plant</button>
      </Link>
    </main>
  )
}
