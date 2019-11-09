import React from 'react';
import '../App.css';
import Header from './Header'
import Start from './Start'
//import Login from './Login'
//import HomeButton from './HomeButton'
import CitiesCarousel from './CitiesCarousel'
import Menu from './Menu'

import {Provider} from 'react-redux'
import store from './../store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Menu></Menu>
          <Header></Header>
          <Start></Start>
          <CitiesCarousel></CitiesCarousel>
      </div>
    </Provider>
  );
}

export default App;
