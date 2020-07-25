import React from 'react'
import './abc.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import Test from './screens/Test'
import ViewDetail from './screens/ViewDetail'
import ViewCart from './screens/ViewCart'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/loveThuy" component={Test}/>
      <Route path="/detail" component={ViewDetail}/>
      <Route path="/cart" component={ViewCart}/>
    </Switch>
      </BrowserRouter>
  )
}

export default App
