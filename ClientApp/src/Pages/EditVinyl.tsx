import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { APIError, VinylType } from '../types'

async function submitEditedVinyl(vinylToUpdate: VinylType) {
  const response = await fetch(`/api/Vinyls/${vinylToUpdate.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(vinylToUpdate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
async function loadOneVinyl(id: string) {
  const response = await fetch(`/api/Vinyls/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function EditVinyl() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  useQuery<VinylType>(['one-vinyl', id], () => loadOneVinyl(id), {
    onSuccess: function (vinylsBeingLoaded) {
      console.log(vinylsBeingLoaded)
      setUpdatingVinyl(vinylsBeingLoaded)
    },
  })

  const [updatingVinyl, setUpdatingVinyl] = useState<VinylType>({
    id: undefined,
    album: '',
    artist: '',
    releaseYear: 0,
    genre: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const updateTheVinyl = useMutation(submitEditedVinyl, {
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

    const updatedVinyl = { ...updatingVinyl, [fieldName]: value }

    setUpdatingVinyl(updatedVinyl)
  }

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedVinyl = { ...updatingVinyl, [fieldName]: value }

    setUpdatingVinyl(updatedVinyl)
  }

  return (
    <main className="VinylsPage">
      <form
        onSubmit={(event) => {
          event.preventDefault()
          updateTheVinyl.mutate(updatingVinyl)
        }}
        className="VinylAdds"
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="addVinylForms">
          <input
            name="album"
            placeholder="Enter album's name"
            value={updatingVinyl.album}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            name="artist"
            placeholder="Enter artist's name"
            value={updatingVinyl.artist}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForms">
          <input
            name="releaseYear"
            placeholder="Enter album's release year"
            value={updatingVinyl.releaseYear}
            onChange={handleNumberInputChange}
          />
        </p>
        <p className="addVinylForm">
          <input
            name="genre"
            placeholder="Enter album's genre:"
            value={updatingVinyl.genre}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="addVinylForms">
          <input type="file" name="picture" />
        </p>
        <input type="submit" value="Submit" className="SubmitVinyl" />
      </form>
    </main>
  )
}
