import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { VinylType } from '../types'

async function loadOneVinyl(id: string) {
  const response = await fetch(`/api/Vinyls/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

const NullVinyl: VinylType = {
  id: undefined,
  album: '',
  artist: '',
  releaseYear: 0,
  genre: '',
}

export function Vinyl() {
  async function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) {
    event.preventDefault()

    const response = await fetch(`/api/Vinyls/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })

    if (response.status === 200 || response.status === 204) {
      history.push('/')
    }
  }
  const { id } = useParams<{ id: string }>()
  console.log(id)
  const history = useHistory()
  const { data: vinyl = NullVinyl } = useQuery<VinylType>(
    ['one-vinyl', id],
    () => loadOneVinyl(id)
  )

  return (
    <main className="SingleVinyl">
      <h2 className="TitleName">{vinyl.album} </h2>
      <li className="SingleVinylList">{vinyl.artist}</li>
      <li className="SingleVinylList"> {vinyl.releaseYear}</li>
      <li className="SingleVinylList"> {vinyl.genre}</li>

      <p>
        <Link to={`/Vinyls/View/${vinyl.id}/edit`}>
          <button className="VinylEditButton">EDIT</button>
        </Link>
      </p>

      <button
        className="DeleteVinyl"
        onClick={(event) => handleDelete(event, vinyl.id!)}
      >
        Delete
      </button>
    </main>
  )
}
