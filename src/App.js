import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Home from './components/Home/Home';
import User from './components/User/User';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/home"
          component={Home}
        />
        <Route
          path="/info"
          component={User}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404
          You're not gonna find what you're looking for here!
        </h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
