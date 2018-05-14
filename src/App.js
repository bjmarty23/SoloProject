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
//styling imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import blue900 from 'material-ui/colors/brown';
import blue from  'material-ui/colors/blue';
import './styles/main.css';

const theme = createMuiTheme({
  palette: {
    primary: blue, 
    secondary: blue900

  }
});

// routes to all the individual pages
const App = () => (
  <MuiThemeProvider theme={theme}>
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
         <Route
          path="/detaillist/:location.id"
          component={DetailList}
        />
        {/* OTHERWISE */}
        <Route render={() => <h1>404
          You're not gonna find what you're looking for here!
        </h1>} />

        {/* DetailList = () => {
          <div>
            <Route path="{detaillist/:location.Id}" component={DetailList} />
            <Route
              exact
              path={match.url}
              render={() => <h3>Please select a topic.</h3>}
            />
          </div> */}
        }

      </Switch>
    </Router>
  </div>
  </MuiThemeProvider>
);

export default App;
