import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { APIError, CrystalType } from '../types'

async function submitNewcrystal(CrystalToCreate: CrystalType) {
  const response = await fetch('/api/Crystals/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(CrystalToCreate),
  })
  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function AddCrystal() {
  const history = useHistory()

  const [newCrystal, setNewCrystal] = useState<CrystalType>({
    id: undefined,
    name: '',
    size: '',
    color: '',
    description: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const createNewCrystal = useMutation(submitNewcrystal, {
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

    const updatedCrystal = { ...newCrystal, [fieldName]: value }

    setNewCrystal(updatedCrystal)
  }
  return (
    <main className="CrystalsPage">
      <form
        className="SkyBlueCrystal"
        onSubmit={(event) => {
          event.preventDefault()
          createNewCrystal.mutate(newCrystal)
        }}
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="CrystalAdd">
          <input
            name="name"
            placeholder="Enter Crystal's name"
            value={newCrystal.name}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdds">
          <input
            name="size"
            placeholder="Enter Crystal's size "
            value={newCrystal.size}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdd">
          <input
            name="color"
            placeholder="Enter Crystal's color"
            value={newCrystal.color}
            onChange={handleStringInputChange}
          />
        </p>
        <p className="CrystalAdd">
          <input
            name="description"
            placeholder="Describe the Crystal"
            value={newCrystal.description}
            onChange={handleStringInputChange}
          />
        </p>

        <input type="submit" value="Submit" className="SubmitCrystal" />
      </form>
    </main>
  )
}
