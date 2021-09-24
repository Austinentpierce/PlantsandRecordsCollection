import React from 'react'
import { Link } from 'react-router-dom'

export function Homepage() {
  return (
    <main className="Home">
      <div className="plantpic">
        <h2>plants.</h2>
        <Link to="/Plants/List">
          <img
            src="https://images.unsplash.com/photo-1567339858240-a891d7bc079e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            width="250"
            height="250"
          ></img>
        </Link>
      </div>
      <div className="vinylpic">
        <h2>records.</h2>
        <Link to="/Vinyls/List">
          <img
            src="https://m.media-amazon.com/images/I/71-hDRLrbJL._AC_SL1500_.jpg"
            width="250"
            height="250"
          ></img>
        </Link>
      </div>
    </main>
  )
}
