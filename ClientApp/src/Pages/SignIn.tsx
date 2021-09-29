import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { recordAuthentication } from '../auth'
import { APIError, LoginSuccess, LoginUserType } from '../types'

async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
  const response = await fetch('/api/Sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })

  if (response.ok) {
    return response.json()
  } else {
    return await response.json()
  }
}

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState('')

  const [user, setUser] = useState<LoginUserType>({
    email: '',
    password: '',
  })
  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      recordAuthentication(apiResponse)
      window.location.assign('/')
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...user, [fieldName]: value }

    setUser(updatedUser)
  }

  return (
    <main className="signinpage">
      <h2 className="signinmain">Sign In</h2>
      <form
        onSubmit={function (event) {
          event.preventDefault()
          loginUserMutation.mutate(user)
        }}
      >
        {errorMessage ? <p className="formError"> {errorMessage}</p> : null}
        <p className="signinform">
          <label className="signinlabel" htmlFor="name">
            Email
          </label>
          <input
            className="signininput"
            type="email"
            name="email"
            value={user.email}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="signinform">
          <label className="signinlabel2" htmlFor="password">
            Password
          </label>
          <input
            className="signininput2"
            type="password"
            name="password"
            value={user.password}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Submit" className="signinsubmit" />
        </p>
      </form>
    </main>
  )
}
