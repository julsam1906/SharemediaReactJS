import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Connexion from './components/Connexion'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Accueil from './components/Accueil'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Connexion} />
      <Route path='/sharemedia/:pseudo/home' component={Accueil} />
      <Route path='/sharemedia/:pseudo/:current' component={Accueil} />
      <Route path='/sharemedia/:pseudo/:current/:key' component={Accueil} />
      <Route path='/sharemedia/:pseudo/:current/update/:key' component={Accueil} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
