import React from 'react'
import { Link } from 'react-router-dom'

export function Plants() {
  return (
    <main className="page1plants">
      <input className="plantsearch" placeholder="Search" />
      <Link to="/AddPlant">
        <button className="plantbox">Add Plant</button>
      </Link>
      <button className="plantbox">View All</button>
    </main>
  )
}
