import React from 'react'
import { Link } from 'react-router-dom'

export function App() {
  return (
    <main>
      <header>
        <Link to="/">
          <div className=" leaf fas fa-3x fa-leaf"></div>
        </Link>
        <div className="mainhead">B P and R</div>
        <div className=" vinyl fas fa-3x fa-record-vinyl"></div>
      </header>

      <footer>Created with ♥ in Tampa, Florida </footer>
    </main>
  )
}
