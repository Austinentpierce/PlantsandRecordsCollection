import React from 'react'
import { Link } from 'react-router-dom'

export function Plants() {
  return (
    <main className="PlantsPage">
      <input className="plantsearch" placeholder="Search" />
      <Link to="/Plants/Add">
        <button className="plantbox">Add Plant</button>
      </Link>
      <Link to="/Plants/View">
        <button className="plantbox">View All</button>
      </Link>
    </main>
  )
}
