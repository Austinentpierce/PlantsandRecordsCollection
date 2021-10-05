import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { SinglePlantFromList } from '../Components/SinglePlantFromList'
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
      {/* {
  plant.photoURL ? (
    <img alt="Restaurant Photo" width={200} src={plant.photoURL} />
  ) : null
} */}
      <ul className="DiffPlants">
        {Plants.map(function (Plant) {
          return <SinglePlantFromList key={Plant.id} plant={Plant} />
        })}
      </ul>
    </main>
  )
}
