import React from 'react'
import { Link } from 'react-router-dom'

export function AddVinyl() {
  return (
    <main className="VinylsPage">
      <form className="VinylAdds">
        <p className="addVinylForms">
          <input placeholder="Enter album's name" />
        </p>
        <p className="addVinylForm">
          <input placeholder="Enter artist's name" />
        </p>
        <p className="addVinylForms">
          <input placeholder="Enter album's release year" />
        </p>
        <p className="addVinylForm">
          <input placeholder="Enter album's genre:" />
        </p>
      </form>
      <Link to="/Vinyls/List">
        <div className="wrap">
          <button className="buttonaddv">Add Vinyl</button>
        </div>
      </Link>
    </main>
  )
}
