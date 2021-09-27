import React, { useState } from 'react'
import { useMutation } from 'react-query'
// import { Link } from 'react-router-dom'
import { CrystalType } from '../types'

async function submitNewcrystal(CrystalToCreate: CrystalType) {
  const response = await fetch('/api/Crystals/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(CrystalToCreate),
  })

  return response.json()
}

export function AddCrystal() {
  const [newCrystal, setNewCrystal] = useState<CrystalType>({
    id: undefined,
    name: '',
    size: '',
    color: '',
    description: '',
  })

  const createNewCrystal = useMutation(submitNewcrystal)

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

        <input type="submit" value="Submit" className="SubmitAddCrystal" />
      </form>
      {/* <Link to="/Crystals/list">
        <div className="CrystalSubmit">
          <button className="SubmitCrystal">Submit</button>
        </div>
      </Link> */}
    </main>
  )
}
