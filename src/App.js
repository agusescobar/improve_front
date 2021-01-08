import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'


import Authenticator from './components/Authenticator'
import AlbumsPage from './pages/Albums'
import GenresPage from './pages/Genres'
import BandsPage from './pages/Bands'
import LoginPage from './pages/Login'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Authenticator>        
          <Route path="/login" component={LoginPage} />
          <Route path="/genres" component={GenresPage} />
          <Route path='/band/:id' component={BandsPage} />
          <Route path='/albums/:id' component={AlbumsPage} />
        </Authenticator>
      </Switch>
    </Router>
  )
}

export default App
