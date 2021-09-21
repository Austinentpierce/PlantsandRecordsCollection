import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'

export function App() {
  return (
    <>
      <header>
        <div className=" leaf fas fa-3x fa-leaf"></div>
        <Link to="/">
          <div className="mainhead">B P and R</div>
        </Link>
        <div className=" vinyl fas fa-3x fa-record-vinyl"></div>
      </header>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
      <footer>Created with ♥ in Tampa, Florida </footer>
    </>
  )
}
