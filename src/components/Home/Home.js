import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  location: state.getDataReducer,
});

class Home extends Component {
  state = {
    location: '',
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
    // this.props.history.push('home');
  }

  render() {
    let locations = this.props.location.map((location) => {
      console.log('location ',location);
      return (
        //this needs to to be turned into the details button, beneith.
        <div key={location.id}> lat:{location.latitude}, long:{location.longitude}, name:{location.name} </div>
        // {item.distance} strech goal geo sql library
      )
    });
    let content = null;
    
    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>          
            <pre>
              {locations}
            </pre>
          </div>
        );
      }

      return (
        <div>
          <Nav />
          { content }
        </div>
      );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
