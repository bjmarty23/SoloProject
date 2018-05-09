import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_ACTIONS } from '../../redux/actions/userActions';

import { triggerLogout } from '../../redux/actions/loginActions';

const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }
//begin 

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      // this.props.history.push('home');
    }
  }

  //end
    render() {
      return(
    
      <div className="navbar">
        <div>
          <ul>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/newlocation">
              NewLocation
              </Link>
            </li>
            <li>
              <Link to="/detailList">
                DetailList
              </Link>
            </li>
            <li>
              <Link to="/">
              <button
                onClick={this.logout}
                >Log Out
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps)(Nav);
