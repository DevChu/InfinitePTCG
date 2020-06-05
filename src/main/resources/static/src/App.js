import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './component/Header'
import Decklist from './Decklist'

function App() {
  return (
    <div>
      <Header />
      <Route path='/decklist' component={Decklist} />
    </div>
  );
}

export default App;
