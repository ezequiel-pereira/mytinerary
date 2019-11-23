import React from 'react'
import Home from './components/Home'
import Cities from './components/Cities'
import LoginForm from './components/LoginForm'
import Register from './components/Register'
import Itinerary from './components/Itinerary'
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
        <Route path="/itineraries/:name" component={Itinerary} />
      </Switch>
    </BrowserRouter>
  ); 
}

export default App;