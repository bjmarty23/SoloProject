import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';



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
  getLocation = () => {
    console.log('')
  }

  render() {

    let locations = this.props.location.map((location) => {
      console.log('location ',location);
      return (
        //this needs to to be turned into the details button, beneith.
        
        <div key={location.id}> 
        lat:{location.latitude}, 
        long:{location.longitude}, 
        name:<Link to="detail">{location.name}
        </Link></div>
        
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
            <div>
              <input
                type="number"
                name="zipcode"
                placeholder="Zipcode"
                onClick={this.getLocation}
              />
              <select className="detailDropDown">
                                  <option value="">Type:</option>
                                  <option value="restroom">Restroom</option>
                                  <option value="waterFountain">Water Fountain</option>
                                  <option value="restaurant">Restaurant</option>
                                  </select>
              <button>Find</button>
            </div>
          </h1>
          <pre>
            {locations}
          </pre>
        <Link to="/newlocation">Create New icon Button</Link>
          
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
