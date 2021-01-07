import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Authenticator from './components/Authenticator'

import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Authenticator>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
        </Authenticator>
      </Switch>
    </Router>
  )
}

export default App
