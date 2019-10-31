import React from 'react';
import '../App.css';
import Header from './Header'
import Start from './Start'
import Login from './Login'
import HomeButton from './HomeButton'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Start></Start>
        <Login></Login>
        <HomeButton></HomeButton>
    </div>
  );
}

export default App;
