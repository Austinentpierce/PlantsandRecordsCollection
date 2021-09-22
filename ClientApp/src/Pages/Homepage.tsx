import React from 'react'
import { Link } from 'react-router-dom'

export function Homepage() {
  return (
    <main className="Home">
      <div className="plantpic">
        <h2>plants.</h2>
        <Link to="/plants">
          <img
            src="https://monsteraplantresource.com/wp-content/uploads/2019/08/close-up-fresh-freshness-1964869-600x400-1.jpg"
            width="275"
            height="275"
          ></img>
        </Link>
      </div>
      <div className="vinylpic">
        <h2>records.</h2>
        <Link to="/vinyls">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJ8NA0JGIPASYGpYV86pbW1HCIz2ULrUnPQ&usqp=CAU"
            width="275"
            height="275"
          ></img>
        </Link>
      </div>
    </main>
  )
}
