import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import App from './App.js'
export default function getRoutes(){
  return(
    <BrowserRouter onUpdate={() => {window.scrollTo(0,0)}}>
    <main>
      <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='*' component={App}/>
      </Switch>
    </main>
    </BrowserRouter>
  )
}
