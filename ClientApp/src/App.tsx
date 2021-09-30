import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AddPlant } from './Pages/AddPlant'
import { AddVinyl } from './Pages/AddVinyl'
import { Homepage } from './Pages/Homepage'
import { Plants } from './Pages/Plants'
import { ViewPlants } from './Pages/ViewPlants'
import { ViewVinyls } from './Pages/ViewVinyls'
import { Vinyls } from './Pages/Vinyls'
import { Crystals } from './Pages/Crystals'
import { AddCrystal } from './Pages/AddCrystal'
import { ViewCrystals } from './Pages/ViewCrystals'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Plant } from './Pages/Plant'

export function App() {
  return (
    <>
      <header>
        <Link to="/signin">
          <div className=" leaf fas fa-2x fa-leaf"></div>
        </Link>
        <Link to="/">
          <div className="mainhead">Plants Records and Crystals</div>
        </Link>
        <Link to="/signup">
          <div className=" vinyl fas fa-2x fa-record-vinyl"></div>
        </Link>
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
            <Route exact path="/Plants/View/:id">
              <Plant />
            </Route>
          </Switch>
        </Route>

        <Route path="/Crystals">
          <div className="crystals-background"></div>

          <Switch>
            <Route exact path="/Crystals/List">
              <Crystals />
            </Route>
            <Route exact path="/Crystals/Add">
              <AddCrystal />
            </Route>
            <Route exact path="/Crystals/View">
              <ViewCrystals />
            </Route>
          </Switch>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
      </Switch>
      <footer>
        Built with <i className="fas fa-tree"></i> in Tampa, Florida{' '}
      </footer>
    </>
  )
}
