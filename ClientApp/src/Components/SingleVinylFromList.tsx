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
        <Link to={`/Vinyls/View/${props.vinyl.id}`}>{props.vinyl.album}</Link>
      </h2>
      <li>{props.vinyl.artist}</li>
      <li>{props.vinyl.releaseYear}</li>
      <li>{props.vinyl.genre}</li>
    </main>
  )
}
type SingleVinylFromListProps = {
  vinyl: VinylType
}
