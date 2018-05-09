import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import Modal from 'material-ui/Modal';




const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations,
  state
});



class DetailList extends Component {
  state={
    location: this.props.location,
    name:this.props.location.name,
    latitude:this.props.location.latitude,
    longitude:this.props.location.longitude,
    notes:this.props.location.notes
  }

  handleClick = () => {
    console.log('in handleclick');
    this.deleteLocation();
  }
  
  deleteLocation = (location) => {
    console.log('in delete button',this.props.state.getDetailReducer)
    this.props.dispatch({
        type: 'REMOVE_LOCATION',
        payload: this.props.state.getDetailReducer
    })
  }
  // need to add edit modal then this will work.
  updateLocation=(location) => {
    console.log('in update', this.props.state.getDetailReducer)
    this.props.dispatch({
      type: 'UPDATE_LOCATION',
      payload: this.props.state.getDetailReducer
    })
  }

  //moved logout into nav bar from screen
  render() {
    let content = null;

    if (this.props.user.userName) {
      
      content = (
        <div>
            <h3>{this.props.state.getDetailReducer.name}</h3>
            <h5>Notes: {this.props.state.getDetailReducer.notes}<br />
            Latitude: {this.props.state.getDetailReducer.latitude}<br />
            Longitude: {this.props.state.getDetailReducer.longitude}</h5>
            


          <Link to="/home"><button
            onClick={this.handleClick}
          >
            Delete
          </button></Link>
          <button
            onClick={this.updateLocation}
          >
            update and save
          </button>
         </div>
      );
    }

    return (
      <div>
     
        <Nav />
        <Link to="/home">
      <button onClick={this.back}>Back</button>
      {/* <pre>{JSON.stringify(this.props.state.getDetailReducer)}</pre> */}
      </Link>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DetailList);
