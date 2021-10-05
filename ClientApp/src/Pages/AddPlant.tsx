import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
// import { useDropzone } from 'react-dropzone'
import { APIError, PlantType } from '../types'

async function submitNewPlant(plantToCreate: PlantType) {
  const response = await fetch('/api/Plants/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(plantToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function AddPlant() {
  const history = useHistory()

  const [newPlant, setNewPlant] = useState<PlantType>({
    id: undefined,
    name: '',
    type: '',
    location: '',
    watering: '',
    pot: 0,
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  // const [isUploading, setIsUploading] = useState(false)
  const createNewPlant = useMutation(submitNewPlant, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join('')

      setErrorMessage(newMessage)
    },
  })

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
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
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
        <input type="submit" value="Submit" className="SubmitPlant" />
      </form>
    </main>
  )
}
