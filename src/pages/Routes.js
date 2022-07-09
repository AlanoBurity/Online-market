import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CartPage from './CartPage';
import MainPage from './MainPage';
import ItemPage from './ItemPage';

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ MainPage } />
          <Route path="/CartPage" component={ CartPage } />
          <Route path="/ItemPage/:id" component={ ItemPage } />
        </Switch>
      </div>
    );
  }
}
