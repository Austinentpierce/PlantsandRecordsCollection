import React from 'react'
import { Link } from 'react-router-dom'

export function AddCrystal() {
  return (
    <main className="CrystalsPage">
      <form className="SkyBlueCrystal">
        <p className="CrystalAdd">
          <input placeholder="Enter Crystal's name" />
        </p>
        <p className="CrystalAdds">
          <input placeholder="Enter Crystal's size " />
        </p>
        <p className="CrystalAdd">
          <input placeholder="Enter Crystal's color" />
        </p>
        <p className="CrystalAdd">
          <input placeholder="Describe the Crystal" />
        </p>
      </form>
      <Link to="/Crystals/list">
        <div className="CrystalSubmit">
          <button className="SubmitCrystal">Submit</button>
        </div>
      </Link>
    </main>
  )
}
