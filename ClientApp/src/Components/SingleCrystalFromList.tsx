import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CrystalType } from '../types'

export function SingleCrystalFromList(props: SingleCrystalFromListProps) {
  useEffect(() => {
    console.log(props.crystal)
  })

  return (
    <main>
      <h2>
        <Link to={`/Crystals/View/${props.crystal.id}`}>
          {props.crystal.name}
        </Link>
      </h2>
      <li>{props.crystal.size}</li>
      <li>{props.crystal.color}</li>
      <li>{props.crystal.description}</li>
    </main>
  )
}
type SingleCrystalFromListProps = {
  crystal: CrystalType
}
