import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PlantType } from '../types'

export function SinglePlantFromList(props: SinglePlantFromListProps) {
  useEffect(() => {
    console.log(props.plant)
  })

  return (
    <main className="ViewPlants">
      <h2>
        <Link className="plant-link" to={`/Plants/View/${props.plant.id}`}>
          {props.plant.name}
        </Link>
      </h2>
      <ul className="Viewplantslist">
        <li>{props.plant.type}</li>
        <li>{props.plant.location}</li>
        <li>{props.plant.watering}</li>
        <li>{props.plant.pot}</li>
        <li>{props.plant.description}</li>
      </ul>
    </main>
  )
}
type SinglePlantFromListProps = {
  plant: PlantType
}
