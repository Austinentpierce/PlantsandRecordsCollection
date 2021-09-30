import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
// import { authHeader } from '../auth'
import { PlantType } from '../types'

async function loadOnePlant(id: string) {
  const response = await fetch(`/api/Plants/View/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
// async function handleDelete(event) {
//   event.preventDefault()

//   const response = await fetch(`/api/Plants/View/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json',
//       Authorization: authHeader(),
//     },
//   })

//   if (response.status === 200 || response.status === 204) {
//     history.push('/')
//   }
// }

const NullPlant: PlantType = {
  id: undefined,
  name: '',
  type: '',
  location: '',
  watering: '',
  pot: 0,
  description: '',
}

export function Plant() {
  const { id } = useParams<{ id: string }>()

  const { data: plant = NullPlant } = useQuery<PlantType>(
    ['one-plant', id],
    () => loadOnePlant(id)
  )
  return (
    <main className="SinglePlant">
      <h2 className="TitleName">{plant.name} </h2>
      <li>{plant.type}</li>
      <li>{plant.watering}</li>
      <li>{plant.pot}</li>
      <li>{plant.description}</li>

      {/* <button onClick={handleDelete}>Delete</button> */}
    </main>
  )
}
