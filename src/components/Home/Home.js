import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import Detail from '../Detail/Detail';
// const mapApi = 'https://www.google.com/maps/embed/v1/MODE?key=AIzaSyCMlm8yrtdrDyTlHKDpAbn2F_DX4kNOmhs&parameters'
// const mapSrc =<iframe width="600" height="450" frameborder="0" style="border:0"
// src="https://www.google.com/maps/embed/v1/MODE?key=AIzaSyCMlm8yrtdrDyTlHKDpAbn2F_DX4kNOmhs&parameters
// " allowfullscreen></iframe> 

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
    console.log(this.props.state)
    // this.props.history.push('home');
  }
  

  //halp
  // getTypeLocation = () => {
  //   console.log('getting location')
  //   //i want to to take the type and zip code and compare them to current data in db.
  //   if(location.type === this.state.).then((response) => {
  //     console.log('response', response);
  //   }).catch((error) => {
  //     console.log('error', error)
  //   })
  // }
  render() {
    // splitting up
    let locations = this.props.location.map((location) => {
      // console.log('location ',location);
      return ( <Detail key={location.id}
                      location={location}/> 

        
        // controls the name button to transfer view to details page
        // <div key={location.id}> 
        // lat:{location.latitude}, 
        // long:{location.longitude}, 
        // name:<Link to="detail">{location.name}
        // </Link></div>
        
        // {location.distance} strech goal geo sql library
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
                // onClick={this.getLocation}
              />
              <select className="homeDropDown">
                                  <option value="">Type:</option>
                                  <option value="restroom">Restroom</option>
                                  <option value="waterFountain">Water Fountain</option>
                                  <option value="restaurant">Restaurant</option>
                                  </select>
              <button onClick={this.getTypeLocation}>Find</button>
            </div>
          </h1>
          <pre>
          {locations}
          </pre>
          {/* <iframe width="600" height="450" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/MODE?key=AIzaSyCMlm8yrtdrDyTlHKDpAbn2F_DX4kNOmhs&parameters
" allowfullscreen></iframe> */}
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
