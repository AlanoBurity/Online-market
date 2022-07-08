import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';
import CartPage from './pages/CartPage';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/CartPage" component={ CartPage } />
        <Route path="/ItemPage" component={ ItemPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
