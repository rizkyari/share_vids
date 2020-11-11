import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {  Router, Route, Switch, } from 'react-router-dom';
import Home from './page/home';
import Register from './page/register';
import Login from './page/login';


function App() {
  return (
      <Router>
     
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
     
      </Router>
  );
}

export default App;
