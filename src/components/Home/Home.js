import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Detail from '../Detail/Detail';
//import HomeItem from './HomeItem';
// import Map from '../../components/Map/Map'
// import Button from 'material-ui/Button';
// import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Card, { CardContent, } from 'material-ui/Card';
import { Grid } from 'material-ui';


const mapStateToProps = state => ({
  user: state.user,
  location: state.getDataReducer,
  state,
  
});

class Home extends Component {
  state = {
    location: '',
    type: '',
  }
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    this.props.dispatch({ type:'GET_LOCATION'});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/login');
    }
  }
  logout = () => {
    this.props.dispatch(triggerLogout());
    console.log(this.props.state)
    // this.props.history.push('home');
  }
  
  render() {
    // const { classes } = this.props;
    // mapping locations
    let locations = this.props.location.map((location) => {
      // console.log('location ',location);
      return ( <Detail key={location.id}
                      location={location}/> 

      )
    });
    let content = null;
    
    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
          <Grid item>
        <Card  className="card" style={{margin: "20px"}} >
        <CardContent>
        Welcome, {this.props.user.userName}!
        </CardContent>
        </Card>
        </Grid>
        
            <div>
              {/* <HomeItem /> */}
            </div>
          </h1>
          <pre className="locations">
          {locations}
          </pre>
        <Link to="/newlocation"><Button variant="fab" color="primary" aria-label="add" >
        <AddIcon />
      </Button></Link>
          <div>
                    
          </div>
        </div>
        );
      }

      return (

        <div>
          <Link to="/">
            <button className="logout"
              onClick={this.logout}
              >Log Out
            </button>
          </Link>
          { content }
          {/* <Map isMarkerShown /> */}
        </div>
        
      );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
