import React, { useState } from 'react'
import { NewUserType } from '../types'

export function SignUp() {
  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })

  return (
    <main className="page">
      <nav>
        <a href="/">
          <i className="fa fa-tree"></i>
        </a>
        <h2>Sign Up</h2>
      </nav>

      <form action="#">
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="form-input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </p>
        <p className="form-input">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" />
        </p>
        <p className="form-input">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </form>
    </main>
  )
}
