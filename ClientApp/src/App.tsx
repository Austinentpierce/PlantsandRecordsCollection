import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AddPlant } from './Pages/AddPlant'
import { AddVinyl } from './Pages/AddVinyl'
import { Homepage } from './Pages/Homepage'
import { Plants } from './Pages/Plants'
import { ViewPlants } from './Pages/ViewPlants'
import { ViewVinyls } from './Pages/ViewVinyls'
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

        <Route path="/Vinyls">
          <div className="vinyls-background"></div>

          <Switch>
            <Route exact path="/Vinyls/List">
              <Vinyls />
            </Route>
            <Route exact path="/Vinyls/Add">
              <AddVinyl />
            </Route>
            <Route exact path="/Vinyls/View">
              <ViewVinyls />
            </Route>
          </Switch>
        </Route>

        <Route path="/Plants">
          <div className="plants-background"></div>

          <Switch>
            <Route exact path="/Plants/List">
              <Plants />
            </Route>
            <Route exact path="/Plants/Add">
              <AddPlant />
            </Route>
            <Route exact path="/Plants/View">
              <ViewPlants />
            </Route>
          </Switch>
        </Route>
      </Switch>
      <footer>
        Built with <i className="fas fa-tree"></i> in Tampa, Florida{' '}
      </footer>
    </>
  )
}
