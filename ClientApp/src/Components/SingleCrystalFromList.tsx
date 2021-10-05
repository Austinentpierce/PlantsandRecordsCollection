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
        <Link
          className="crystal-link"
          to={`/Crystals/View/${props.crystal.id}`}
        >
          {props.crystal.name}
        </Link>
      </h2>
      <ul className="Viewcrystallist">
        <li>{props.crystal.size}</li>
        <li>{props.crystal.color}</li>
        <li>{props.crystal.description}</li>
      </ul>
    </main>
  )
}
type SingleCrystalFromListProps = {
  crystal: CrystalType
}
