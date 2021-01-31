import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/auth/login.js'
import Messenger from './components/messenger/index.js'
import SignUp from './components/auth/signup'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import conversation from './reducer/conversation'
import { Provider } from 'react-redux'

const store = createStore(conversation, applyMiddleware(thunk))

function App () {
  return (
    <Provider store={store} >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li>
              <li>
                <Link to="/messenger">messenger</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/signup/' component={SignUp} />
            <Route exact path='/messenger/' component={Messenger} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default App
