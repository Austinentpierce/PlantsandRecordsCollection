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
import { Vinyl } from './Pages/Vinyl'
import { Crystal } from './Pages/Crystal'
import { EditPlant } from './Pages/EditPlant'
import { EditVinyl } from './Pages/EditVinyl'
import { EditCrystal } from './Pages/EditCrystal'

export function App() {
  return (
    <>
      <header>
        <Link to="/signin">
          <Switch>
            <Route path="/Plants">
              <div className="plants-leaf fas fa-2x fa-leaf"></div>
            </Route>
            <Route path="/Vinyls">
              <div className="vinyl-leaf fas fa-2x fa-leaf"></div>
            </Route>
            <Route path="/Crystals">
              <div className="crystal-leaf fas fa-2x fa-leaf"></div>
            </Route>
            <Route path="*">
              <div className="home-leaf fas fa-2x fa-leaf"></div>
            </Route>
          </Switch>
        </Link>
        <Link to="/">
          <div className="mainhead">Plants Records and Crystals</div>
        </Link>
        <Link to="/signup">
          <Switch>
            <Route path="/Plants">
              <div className="plants-vinyl fas fa-2x fa-record-vinyl"></div>
            </Route>
            <Route path="/Vinyls">
              <div className="vinyls-vinyl fas fa-2x fa-record-vinyl"></div>
            </Route>
            <Route path="/Crystals">
              <div className="crystals-vinyl fas fa-2x fa-record-vinyl"></div>
            </Route>
            <Route path="*">
              <div className="home-vinyl fas fa-2x fa-record-vinyl"></div>
            </Route>
          </Switch>
        </Link>
      </header>

      <section className="page-wrapper">
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
              <Route exact path="/Vinyls/View/:id">
                <Vinyl />
              </Route>
              <Route exact path="/Vinyls/View/:id/Edit">
                <EditVinyl />
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
              <Route exact path="/Plants/View/:id/Edit">
                <EditPlant />
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
              <Route exact path="/Crystals/View/:id">
                <Crystal />
              </Route>
              <Route exact path="/Crystals/View/:id/Edit">
                <EditCrystal />
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
      </section>

      <footer>
        <p>
          Built with <i className=" tree fas fa-tree"></i> in Tampa, Florida{' '}
        </p>
      </footer>
    </>
  )
}
