import React from 'react'
import { Link } from 'react-router-dom'

export function Crystals() {
  return (
    <main className="CrystalsPage">
      <Link to="/Crystals/Add">
        <button className="crystalbox">Add Crystal</button>
      </Link>
      <Link to="/Crystals/View">
        <button className="crystalbox">View All</button>
      </Link>
    </main>
  )
}
