import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import DetailList from './DetailList'



const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations
});

class Detail extends Component {
  state={
    location: this.props.location,
    name:this.props.location.name,
  }
  
//linking home to DetailList page, displaying name/distance of Dom
 //Link in name of each item
  render() {
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
            <h3><Link to="/DetailList">{this.props.location.name}</Link></h3>
            <h4>distance goes here</h4>
        </div>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Detail);
