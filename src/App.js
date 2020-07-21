import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage'

import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      <HomePage/>
    </>
  )
}

export default App