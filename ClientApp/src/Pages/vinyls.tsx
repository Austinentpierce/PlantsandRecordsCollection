import React from 'react'
import { Link } from 'react-router-dom'

export function Vinyls() {
  return (
    <main className="page1vinyl">
      <input className="vinylsearch" placeholder="Search" />
      <Link to="/AddVinyl">
        <button className="vinylbox">Add Vinyl</button>
      </Link>
      <button className="vinylbox">View All</button>
    </main>
  )
}
