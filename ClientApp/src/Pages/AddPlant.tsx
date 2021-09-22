import React from 'react'
import { hashQueryKeyByOptions } from 'react-query/types/core/utils'

export function AddPlant() {
  return (
    <main className="AddPagePlants">
      <form>
        <p className="form-input">
          <label>Name</label>
          <input placeholder="Enter plant name" />
        </p>
        <p className="form-input">
          <label>Normal plant,Herb, Fruit, Vegetable?</label>
          <input placeholder="Enter plant type" />
        </p>
        <p className="form-input">
          <label>Indoor or Outdoor?</label>
          <input placeholder="Enter location of plant" />
        </p>
        <p className="form-input">
          <label>Amount of watering </label>
          <input placeholder="Everyday, Every other day?" />
        </p>
        <p className="form-input">
          <label>Pot Number</label>
          <input placeholder="Enter Pot number plant is in" />
        </p>
        <p className="form-input">
          <label>Description</label>
        </p>
      </form>
      <button className="plantbox">Add Plant</button>
    </main>
  )
}
