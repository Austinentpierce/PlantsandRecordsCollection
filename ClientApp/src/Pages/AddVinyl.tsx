import React from 'react'
import { Link } from 'react-router-dom'

export function AddVinyl() {
  return (
    <main className="VinylsPage">
      <form className="VinylAdds">
        <p className="addVinylForms">
          <label>Album Name: </label>
          <input placeholder="Enter album name:" />
        </p>
        <p className="addVinylForm">
          <label>Artist Name: </label>
          <input placeholder="Enter artist name:" />
        </p>
        <p className="addVinylForms">
          <label>Release Year: </label>
          <input placeholder="Enter album release date:" />
        </p>
        <p className="addVinylForm">
          <label>Genre: </label>
          <input placeholder="Enter album genre:" />
        </p>
      </form>
      <Link to="/Vinyls/List">
        <button className="vinylbox">Add Vinyl</button>
      </Link>
    </main>
  )
}
