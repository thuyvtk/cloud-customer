import React from 'react'
import './abc.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Test from './screens/Test'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/loveThuy" component={Test}/>
    </Switch>
      </BrowserRouter>
  )
}

export default App
