import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { PlantType } from '../types'

async function loadOnePlant(id: string) {
  const response = await fetch(`/api/Plants/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

const NullPlant: PlantType = {
  id: undefined,
  name: '',
  type: '',
  location: '',
  watering: '',
  pot: 0,
  description: '',
  photoURL: '',
}

export function Plant() {
  async function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) {
    event.preventDefault()

    const response = await fetch(`/api/Plants/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })

    if (response.status === 200 || response.status === 204) {
      history.push('/')
    }
  }
  const { id } = useParams<{ id: string }>()
  console.log(id)
  const history = useHistory()
  const { data: plant = NullPlant } = useQuery<PlantType>(
    ['one-plant', id],
    () => loadOnePlant(id)
  )
  console.log(NullPlant)
  return (
    <main className="SinglePlant">
      <h2 className="TitleName">{plant.name} </h2>
      <li className="SinglePlantList">{plant.type}</li>
      <li className="SinglePlantList"> {plant.location}</li>
      <li className="SinglePlantList"> {plant.watering}</li>
      <li className="SinglePlantList"> {plant.pot}</li>
      <li className="SinglePlantList"> {plant.description}</li>

      <button
        className="DeletePlant"
        onClick={(event) => handleDelete(event, plant.id!)}
      >
        Delete
      </button>
    </main>
  )
}
