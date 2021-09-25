import React, { useState } from 'react'
import { useMutation } from 'react-query'
// import { Link } from 'react-router-dom'
import { PlantType } from '../types'

async function submitNewPlant(plantToCreate: PlantType) {
  const response = await fetch('/api/Plants/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(plantToCreate),
  })

  return response.json()
}

export function AddPlant() {
  const [newPlant, setNewPlant] = useState<PlantType>({
    id: undefined,
    name: '',
    type: '',
    location: '',
    watering: '',
    pot: 0,
    description: '',
  })
  const createNewPlant = useMutation(submitNewPlant)

  // async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   createNewPlant.mutate(newPlant)
  // }

  function handleNumberInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedPlant = { ...newPlant, [fieldName]: value }

    setNewPlant(updatedPlant)
  }

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedPlant = { ...newPlant, [fieldName]: value }

    setNewPlant(updatedPlant)
  }

  return (
    <main className="PlantsPage">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createNewPlant.mutate(newPlant)
        }}
        className="brown-and-green"
      >
        <p className="form-inputs">
          <input
            name="name"
            placeholder="Enter plant's name"
            value={newPlant.name}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="type"
            placeholder="Normal ,Herb, Fruit, Vegetable? "
            value={newPlant.type}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="location"
            placeholder="Indoor or Outdoor?"
            value={newPlant.location}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="watering"
            placeholder="How often does it need water?"
            value={newPlant.watering}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="pot"
            placeholder="Enter Pot number plant is in"
            value={newPlant.pot}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="description"
            placeholder="Describe the plant"
            value={newPlant.description}
            onChange={handleStringInputChange}
          />
        </p>

        <input type="submit" value="Submit Plant" className="button" />
      </form>
      {/* <Link to="/Plants/list">
        <div className="wrap">
          <button className="button">Submit Plant</button>
        </div>
      </Link> */}
    </main>
  )
}
