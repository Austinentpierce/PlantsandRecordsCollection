import React from 'react'
import { Link } from 'react-router-dom'

export function AddVinyl() {
  return (
    <main className="VinylsPage">
      <form>
        <p className="addVinylForm">
          <label>Album Name: </label>
          <input className="G" placeholder="Enter album name" />
        </p>
        <p className="addVinylForm">
          <label>Artist Name: </label>
          <input className="B" placeholder="Enter artist name" />
        </p>
        <p className="addVinylForm">
          <label>Release Year: </label>
          <input className="G" placeholder="Enter album release date" />
        </p>
        <p className="addVinylForm">
          <label>Genre: </label>
          <input className="B" placeholder="Enter album genre" />
        </p>
      </form>
      <Link to="/Vinyls">
        <button className="vinylbox">Add Vinyl</button>
      </Link>
    </main>
  )
}
