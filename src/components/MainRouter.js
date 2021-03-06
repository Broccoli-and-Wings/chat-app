import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './core/Menu'
import Home from './core/Home'
import Signup from './user/Signup'

const MainRouter = () => (
  <Fragment>
    <Menu />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Fragment>
)

export default MainRouter
