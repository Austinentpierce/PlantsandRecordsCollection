import React from 'react'
import { Link } from 'react-router-dom'

export function Vinyls() {
  return (
    <main className="VinylsPage">
      <Link to="/Vinyls/Add">
        <button className="vinylbox">Add Vinyl</button>
      </Link>
      <Link to="/Vinyls/View">
        <button className="vinylbox">View All</button>
      </Link>
    </main>
  )
}
