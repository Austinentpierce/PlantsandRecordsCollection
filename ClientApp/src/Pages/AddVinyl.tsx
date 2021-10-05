import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { APIError, VinylType } from '../types'

async function submitNewVinyl(vinylToCreate: VinylType) {
  const response = await fetch('/api/Vinyls/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(vinylToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
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
  const [errorMessage, setErrorMessage] = useState('')

  const createNewVinyl = useMutation(submitNewVinyl, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join('')

      setErrorMessage(newMessage)
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
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
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
