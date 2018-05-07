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
import NewLocation from './components/NewLocation/NewLocation';
import Detail from './components/Detail/Detail';
import DetailList from './components/Detail//DetailList';

import './styles/main.css';
// routes to all the individual pages
const App = () => (
  <div>
    <Header title="Water you up to?" />
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
          path="/detail"
          component={Detail}
        />
        <Route
          path="/newlocation"
          component={NewLocation}
        />
        <Route
          path="/detaillist"
          component={DetailList}
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
