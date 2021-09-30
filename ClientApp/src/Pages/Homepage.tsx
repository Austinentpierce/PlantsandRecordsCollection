import React from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'

export function Homepage() {
  const user = getUser()
  function handleLogout() {
    logout()

    window.location.assign('/')
  }
  return (
    <main className="Home">
      <section className="WelcomeSignout">
        {isLoggedIn() ? (
          <p className="UserName">Welcome back, {user.fullName}!</p>
        ) : null}{' '}
        {isLoggedIn() ? (
          <a
            href="/"
            className="signoutbutton"
            onClick={function (event) {
              event.preventDefault()
              handleLogout()
            }}
          >
            <i className="fas fa-sign-out-alt"></i>
          </a>
        ) : null}
      </section>
      <div className="plantpic">
        <h2>plants.</h2>
        <Link to="/Plants/List">
          <img
            src="https://www.sunset.com/wp-content/uploads/monstera-deliciosa-houseplant-61759-0120-scaled.jpg"
            width="250"
            height="250"
          ></img>
        </Link>
      </div>
      <div className="vinylpic">
        <h2>records.</h2>
        <Link to="/Vinyls/List">
          <img
            src="https://www.selfstorageplus.com/wp-content/uploads/2020/05/Storing-Vinyl-Records-Horizontally-Self-Storage-Plus-min.jpg"
            width="250"
            height="250"
          ></img>
        </Link>
      </div>
      <div className="crystalpic">
        <h2>crystals.</h2>
        <Link to="/Crystals/List">
          <img
            src="https://elixirhomeofsolution.com/wp-content/uploads/2020/08/comprehensive-guide-to-crystals.jpg"
            width="250"
            height="250"
          ></img>
        </Link>
      </div>
    </main>
  )
}
