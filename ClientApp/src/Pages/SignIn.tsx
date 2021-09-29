import React from 'react'

export function SignIn() {
  return (
    <main className="signinpage">
      <h2>Sign In</h2>
      <form action="#">
        <p className="signinform">
          <label className="signinlabel" htmlFor="name">
            Email
          </label>
          <input className="signininput" type="email" name="email" />
        </p>
        <p className="signinform">
          <label className="signinlabel2" htmlFor="password">
            Password
          </label>
          <input className="signininput2" type="password" name="password" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}
