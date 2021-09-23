import React from 'react'
import { Link } from 'react-router-dom'

export function AddPlant() {
  return (
    <main className="PlantsPage">
      <form className="brown-and-green">
        <p className="form-inputs">
          <input placeholder="Enter plant's name" />
        </p>
        <p className="form-input">
          <input placeholder="Normal ,Herb, Fruit, Vegetable? " />
        </p>
        <p className="form-inputs">
          <input placeholder="Indoor or Outdoor?" />
        </p>
        <p className="form-input">
          <input placeholder="How often does it need water?" />
        </p>
        <p className="form-inputs">
          <input placeholder="Enter Pot number plant is in" />
        </p>
        <p className="form-input">
          <input placeholder="Describe the plant" />
        </p>
      </form>
      <Link to="/Plants/list">
        <div className="wrap">
          <button className="button">Submit</button>
        </div>
      </Link>
    </main>
  )
}
