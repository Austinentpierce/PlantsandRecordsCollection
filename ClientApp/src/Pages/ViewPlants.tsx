import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { PlantType } from '../types'

export function ViewPlants() {
  const [filterText, setFilterText] = useState('')

  const { data: Plants = [] } = useQuery<PlantType[]>(
    ['plants', filterText],
    async function () {
      let url = '/api/Plants'

      if (filterText.length !== 0) {
        url = `/api/Plants?filter=${filterText}`
      }

      const response = await fetch(url)
      return response.json()
    }
  )

  console.log({ Plants })
  return (
    <main className="PlantsPage">
      <input
        className="plantsearch"
        placeholder="Search Plants"
        value={filterText}
        onChange={function (event) {
          setFilterText(event.target.value)
        }}
      />

      <ul className="DiffPlants">
        {Plants.map(function (Plants) {
          return (
            <li key={Plants.id}>
              <h2 className="TitleName">{Plants.name}</h2>
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
