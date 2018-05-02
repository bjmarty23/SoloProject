import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
// import {GET_LOCATION } from '../../redux/sagas/sagas';

const mapStateToProps = state => ({
  user: state.user,
  location: [''],
  state,
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

  render() {
    console.log(this.props);
    // let location = <span>Hello</span>;
    let location = this.props.location.map((item) => {
      return (
        <div> {item} </div>
        // {item.distance} strech goal geo sql library
    //     // <div>{item.username} {item.count}</div>
      )
    });
    let content = <div></div>;
    if (this.props.user.userName) {
      content = (
        <div>
          <pre>
            {location}
          </pre>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
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
