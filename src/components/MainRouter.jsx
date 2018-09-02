import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './core/Menu.jsx';
import Home from './core/Home.jsx';
import Signup from './user/Signup.jsx';

const MainRouter = () => (
  <Fragment>
    <Menu />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </Fragment>
);

export default MainRouter;
