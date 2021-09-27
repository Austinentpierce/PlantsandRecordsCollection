import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
// import { Link } from 'react-router-dom'
import { VinylType } from '../types'

async function submitNewVinyl(vinylToCreate: VinylType) {
  const response = await fetch('/api/Vinyls/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(vinylToCreate),
  })

  return response.json()
}

export function AddVinyl() {
  const history = useHistory()

  const [newVinyl, setNewVinyl] = useState<VinylType>({
    id: undefined,
    album: '',
    artist: '',
    releaseYear: 0,
    genre: '',
  })
  const createNewVinyl = useMutation(submitNewVinyl, {
    onSuccess: function () {
      history.push('/')
    },
  })

  function handleNumberInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVinyl = { ...newVinyl, [fieldName]: value }

    setNewVinyl(updatedVinyl)
  }

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVinyl = { ...newVinyl, [fieldName]: value }

    setNewVinyl(updatedVinyl)
  }

  return (
    <main className="VinylsPage">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          createNewVinyl.mutate(newVinyl)
        }}
        className="VinylAdds"
      >
        <p className="addVinylForms">
          <input
            name="album"
            placeholder="Enter album's name"
            value={newVinyl.album}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            name="artist"
            placeholder="Enter artist's name"
            value={newVinyl.artist}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForms">
          <input
            name="releaseYear"
            placeholder="Enter album's release year"
            value={newVinyl.releaseYear}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            name="genre"
            placeholder="Enter album's genre:"
            value={newVinyl.genre}
            onChange={handleStringInputChange}
          />
        </p>

        <input type="submit" value="Submit" className="SubmitVinyl" />
      </form>
    </main>
  )
}
