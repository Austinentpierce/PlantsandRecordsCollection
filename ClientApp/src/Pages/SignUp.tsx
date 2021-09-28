import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { APIError, NewUserType } from '../types'

async function submitNewUser(newUser: NewUserType) {
  const response = await fetch('/api/Users', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newUser),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function SignUp() {
  const history = useHistory()

  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })
  const createUserMutation = useMutation(
    (newUser: NewUserType) => submitNewUser(newUser),
    {
      onSuccess: function () {
        history.push('/')
      },
      onError: function (error: APIError) {
        setErrorMessage(Object.values(error.errors).join('. '))
      },
    }
  )

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }
  return (
    <main className="signuppage">
      <h2 className="signupmain">Sign Up</h2>
      <form
        onSubmit={function (event) {
          event.preventDefault()
          createUserMutation.mutate(newUser)
        }}
      >
        {errorMessage ? <p className="formError">{errorMessage}</p> : null}
        <p className="signupform">
          <label className="signuplabel" htmlFor="name">
            Name
          </label>
          <input
            className="signupinput"
            type="text"
            name="fullName"
            value={newUser.fullName}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="signupform2">
          <label className="signuplabel2" htmlFor="name">
            Email
          </label>
          <input
            className="signupinput2"
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleStringFieldChange}
          />
        </p>
        <p className="signupform3">
          <label className="signuplabel3" htmlFor="password">
            Password
          </label>
          <input
            className="signupinput3"
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleStringFieldChange}
          />
        </p>
        <p>
          <input type="submit" value="Submit" className="signupsubmit" />
        </p>
      </form>
    </main>
  )
}
