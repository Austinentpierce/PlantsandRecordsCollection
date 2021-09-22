import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AddPlant } from './Pages/AddPlant'
import { Homepage } from './Pages/Homepage'
import { Plants } from './Pages/Plants'
import { Vinyls } from './Pages/Vinyls'

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
        <Route exact path="/Vinyls">
          <Vinyls />
        </Route>
        <Route exact path="/Plants">
          <Plants />
        </Route>
        <Route exact path="/AddPlant">
          <AddPlant />
        </Route>
      </Switch>
      <footer>
        Built with <i className="fas fa-tree"></i> in Tampa, Florida{' '}
      </footer>
    </>
  )
}
