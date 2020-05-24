import * as React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home'
import Players from './Players'
import Teams from './Teams'
import Navbar from './Navbar'

export default function App () {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/players'>
            <Players />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
          <Route path='*'>
            <h1 className='text-center'>Four oh Four</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}