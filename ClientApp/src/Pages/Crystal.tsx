import React from 'react'
import { useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { CrystalType } from '../types'

async function loadOneCrystal(id: string) {
  const response = await fetch(`/api/Crystals/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

const NullCrystal: CrystalType = {
  id: undefined,
  name: '',
  size: '',
  color: '',
  description: '',
}

export function Crystal() {
  async function handleDelete(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) {
    event.preventDefault()

    const response = await fetch(`/api/Crystals/${id}`, {
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
  const { data: crystal = NullCrystal } = useQuery<CrystalType>(
    ['one-crystal', id],
    () => loadOneCrystal(id)
  )
  console.log(NullCrystal)
  return (
    <main className="SingleCrystal">
      <h2 className="TitleName">{crystal.name} </h2>
      <li className="SingleCrystalList">{crystal.size}</li>
      <li className="SingleCrystalList"> {crystal.color}</li>
      <li className="SingleCrystalList"> {crystal.description}</li>

      <p>
        <Link to={`/Crystals/View/${crystal.id}/edit`}>
          <button className="CrystalEditButton">EDIT</button>
        </Link>
      </p>

      <button
        className="DeleteCrystal"
        onClick={(event) => handleDelete(event, crystal.id!)}
      >
        Delete
      </button>
    </main>
  )
}
