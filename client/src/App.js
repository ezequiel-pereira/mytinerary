import React from 'react'
import Home from './Components/Home'
import Cities from './Components/Cities'
import LoginForm from './Components/LoginForm'
import Register from './Components/Register'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cities" component={Cities} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;