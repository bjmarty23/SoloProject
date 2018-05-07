import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';



const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations
});

class DetailList extends Component {
  state={
    location: this.props.location,
    name:this.props.location.name,
    latitude:this.props.location.latitude,
    longitude:this.props.location.longitude,
    notes:this.props.location.notes
  }
  

  //moved logout into nav bar from screen
  render() {
    let content = null;

    if (this.props.user.userName) {
    
      content = (
        <div>

            <h3>{this.props.location.name}</h3>
          <button
            onClick={this.delete}
          >
            Delete
          </button>
          <button
            onClick={this.update}
          >
            update and save
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
export default connect(mapStateToProps)(DetailList);
