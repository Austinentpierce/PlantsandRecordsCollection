import React from 'react'

export function App() {
  return (
    <main>
      <header>
        <div className=" leaf fas fa-3x fa-leaf"></div>
        <div className="mainhead">B P and R</div>
        <div className=" vinyl fas fa-3x fa-record-vinyl"></div>
      </header>
      <div className="plantpic">
        <h2>plants.</h2>
        <img
          src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/174043/174043_00_2x.jpg?20190722043957"
          width="275"
          height="275"
        ></img>
      </div>
      <div className="vinylpic">
        <h2>records.</h2>
        <img
          src="https://images.theconversation.com/files/78216/original/image-20150416-5628-6s1t8.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
          width="275"
          height="275"
        ></img>
      </div>
      <footer>Created with ♥ in Tampa, Florida </footer>
    </main>
  )
}
