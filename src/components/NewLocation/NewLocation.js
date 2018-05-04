import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

// import { USER_ACTIONS } from '../../redux/actions/userActions';
// import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  location: state.location
});

class NewLocation extends Component {
  // componentDidMount() {
  //   this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  // }

  // componentDidUpdate() {
  //   if (!this.props.user.isLoading && this.props.user.userName === null) {
  //     this.props.history.push('home');
  //   }
  // } 
  //halp.. pretty sure i dont need any of this ^^


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <Link to="/home">
        <button onClick={this.back}>Back</button>
        </Link>
          <h1
            id="newLocation"
          >
            Add new water source!
          </h1>
          
          <div>
          <select className="newLocationDropDown">
                                  <option value="">Type:</option>
                                  <option value="restroom">Restroom</option>
                                  <option value="waterFountain">Water Fountain</option>
                                  <option value="restaurant">Restaurant</option>
                                  </select>
          </div>
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
export default connect(mapStateToProps)(NewLocation);

