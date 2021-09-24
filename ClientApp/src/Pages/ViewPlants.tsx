import React from 'react'
import { useQuery } from 'react-query'
import { PlantType } from '../types'

export function ViewPlants() {
  const { data: Plants = [] } = useQuery<PlantType[]>(
    'plants',
    async function () {
      const response = await fetch('/api/Plants')
      return response.json()
    }
  )
  console.log({ Plants })
  return (
    <main className="PlantsPage">
      <input className="plantsearch" placeholder="Search Plants" />

      <ul className="DiffPlants">
        {Plants.map(function (Plants) {
          return (
            <li key={Plants.id}>
              <h2>{Plants.name}</h2>
              <p>{Plants.type}</p>
              <p>{Plants.location}</p>
              <p>{Plants.watering}</p>
              <p>{Plants.pot}</p>
              <p>{Plants.description}</p>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
