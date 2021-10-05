import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useHistory, useParams } from 'react-router'
import { APIError, CrystalType } from '../types'

async function submitEditedcrystal(crystalToUpdate: CrystalType) {
  const response = await fetch(`/api/Crystals/${crystalToUpdate.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(crystalToUpdate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}
async function loadOneCrystal(id: string) {
  const response = await fetch(`/api/Crystals/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function EditCrystal() {
  const history = useHistory()
  const { id } = useParams<{ id: string }>()

  useQuery<CrystalType>(['one-crystal', id], () => loadOneCrystal(id), {
    onSuccess: function (crystalsBeingLoaded) {
      console.log(crystalsBeingLoaded)
      setUpdatingCrystal(crystalsBeingLoaded)
    },
  })

  const [updatingCrystal, setUpdatingCrystal] = useState<CrystalType>({
    id: undefined,
    name: '',
    size: '',
    color: '',
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const createNewCrystal = useMutation(submitEditedcrystal, {
    onSuccess: function () {
      history.push('/')
    },
    onError: function (apiError: APIError) {
      const newMessage = Object.values(apiError.errors).join('')

      setErrorMessage(newMessage)
    },
  })

  function handleStringInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedCrystal = { ...updatingCrystal, [fieldName]: value }

    setUpdatingCrystal(updatedCrystal)
  }
  return (
    <main className="CrystalsPage">
      <form
        className="SkyBlueCrystal"
        onSubmit={(event) => {
          event.preventDefault()
          createNewCrystal.mutate(updatingCrystal)
        }}
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="CrystalAdd">
          <input
            name="name"
            placeholder="Enter Crystal's name"
            value={updatingCrystal.name}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdds">
          <input
            name="size"
            placeholder="Enter Crystal's size "
            value={updatingCrystal.size}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdd">
          <input
            name="color"
            placeholder="Enter Crystal's color"
            value={updatingCrystal.color}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdd">
          <input
            name="description"
            placeholder="Describe the Crystal"
            value={updatingCrystal.description}
            onChange={handleStringInputChange}
          />
        </p>

        <input type="submit" value="Submit" className="SubmitCrystal" />
      </form>
    </main>
  )
}
