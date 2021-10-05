import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { APIError, PlantType } from '../types'

async function submitEditedPlant(plantToUpdate: PlantType) {
  const response = await fetch(`/api/Plants/${plantToUpdate.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(plantToUpdate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
async function loadOnePlant(id: string) {
  const response = await fetch(`/api/Plants/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function EditPlant() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  useQuery<PlantType>(['one-plant', id], () => loadOnePlant(id), {
    onSuccess: function (plantsBeingLoaded) {
      console.log(plantsBeingLoaded)
      setUpdatingPlant(plantsBeingLoaded)
    },
  })

  const [updatingPlant, setUpdatingPlant] = useState<PlantType>({
    id: undefined,
    name: '',
    type: '',
    location: '',
    watering: '',
    pot: 0,
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const updateThePlant = useMutation(submitEditedPlant, {
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

    const NewUpdatedPlant = { ...updatingPlant, [fieldName]: value }

    setUpdatingPlant(NewUpdatedPlant)
  }

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const NewUpdatedPlant = { ...updatingPlant, [fieldName]: value }

    setUpdatingPlant(NewUpdatedPlant)
  }

  return (
    <main className="PlantsPage">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          updateThePlant.mutate(updatingPlant)
        }}
        className="brown-and-green"
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="form-inputs">
          <input
            name="name"
            placeholder="Enter plant's name"
            value={updatingPlant.name}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="type"
            placeholder="Normal ,Herb, Fruit, Vegetable? "
            value={updatingPlant.type}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="location"
            placeholder="Indoor or Outdoor?"
            value={updatingPlant.location}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="watering"
            placeholder="How often does it need water?"
            value={updatingPlant.watering}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs">
          <input
            name="pot"
            placeholder="Enter Pot number plant is in"
            value={updatingPlant.pot}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="form-input">
          <input
            name="description"
            placeholder="Describe the plant"
            value={updatingPlant.description}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="form-inputs"></p>
        <input type="submit" value="Submit" className="SubmitPlant" />
      </form>
    </main>
  )
}
