import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
