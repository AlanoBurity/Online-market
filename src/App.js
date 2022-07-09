import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './pages/Routes';
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
      <Routes />
    </BrowserRouter>
  );
}

export default App;
