import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { VinylType } from '../types'

export function SingleVinylFromList(props: SingleVinylFromListProps) {
  useEffect(() => {
    console.log(props.vinyl)
  })

  return (
    <main>
      <h2>
        <Link className="vinyl-link" to={`/Vinyls/View/${props.vinyl.id}`}>
          {props.vinyl.album}
        </Link>
      </h2>
      <ul className="Viewvinyllist">
        <li>{props.vinyl.artist}</li>
        <li>{props.vinyl.releaseYear}</li>
        <li>{props.vinyl.genre}</li>
      </ul>
    </main>
  )
}
type SingleVinylFromListProps = {
  vinyl: VinylType
}
