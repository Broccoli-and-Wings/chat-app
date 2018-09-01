import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Menu from './core/Menu.jsx'
import Home from './core/Home.jsx'
import Signup from './user/Signup.jsx'

class MainRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default MainRouter
