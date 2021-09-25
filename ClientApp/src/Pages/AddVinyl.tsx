import React, { useState } from 'react'
import { useMutation } from 'react-query'
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
  const [newVinyl, setNewVinyl] = useState<VinylType>({
    id: undefined,
    album: '',
    artist: '',
    releaseYear: 0,
    genre: '',
  })
  const createNewVinyl = useMutation(submitNewVinyl)

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
            placeholder="Enter album's name"
            value={newVinyl.album}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            placeholder="Enter artist's name"
            value={newVinyl.artist}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForms">
          <input
            placeholder="Enter album's release year"
            value={newVinyl.releaseYear}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            placeholder="Enter album's genre:"
            value={newVinyl.genre}
            onChange={handleStringInputChange}
          />
        </p>

        <input type="submit" value="Submit" className="SubmitVinyl" />
      </form>
      {/* <Link to="/Vinyls/List">
        <div className="wrap">
          <button className="buttonaddv">Add Vinyl</button>
        </div>
      </Link> */}
    </main>
  )
}
