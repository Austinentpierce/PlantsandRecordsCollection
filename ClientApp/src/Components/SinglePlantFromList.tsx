import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PlantType } from '../types'

export function SinglePlantFromList(props: SinglePlantFromListProps) {
  useEffect(() => {})

  return (
    <main>
      <h2>
        <Link to={`/Plants/View/${props.plant.id}`}>{props.plant.name}</Link>
      </h2>
      <li>{props.plant.type}</li>
      <li>{props.plant.location}</li>
      <li>{props.plant.watering}</li>
      <li>{props.plant.pot}</li>
      <li>{props.plant.description}</li>
    </main>
  )
}
type SinglePlantFromListProps = {
  plant: PlantType
}
