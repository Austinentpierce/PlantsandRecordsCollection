import React from 'react'
import { Link } from 'react-router-dom'

export function Homepage() {
  return (
    <main className="Home">
      <div className="plantpic">
        <h2>plants.</h2>
        <Link to="/plants">
          <img
            src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/174043/174043_00_2x.jpg?20190722043957"
            width="275"
            height="275"
          ></img>
        </Link>
      </div>
      <div className="vinylpic">
        <h2>records.</h2>
        <Link to="/vinyls">
          <img
            src="https://images.theconversation.com/files/78216/original/image-20150416-5628-6s1t8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            width="275"
            height="275"
          ></img>
        </Link>
      </div>
    </main>
  )
}
