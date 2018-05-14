import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
// import DetailList from './DetailList'
import Button from 'material-ui/Button';

  

const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations
});

class Detail extends Component {
  state={
    location: this.props.location,
    name:this.props.location.name,
    id:this.props.location.id
  }
  getLocationDetails = (location) => {
    // console.log('clicked button', this.state.location);
      this.props.dispatch({ 
        type: 'GET_DETAILS',
        payload: this.state.location
      })
    }
  
//linking home to DetailList page, displaying name/distance of Dom
 //Link in name of each item
  render() {
    // console.log('result',this.props.state.getDetailReducer)
  // console.log(this.state.location.id)
    
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
            
             {this.props.location.name}<br/>
             {this.props.location.type}<br/>
            Miles: {Math.floor((this.props.location.distance) * 100)/100}<br/><Button variant="raised" color="primary"  value={this.state.location}
             onClick={() => this.getLocationDetails(this.state.location)}><Link to='/DetailList'>Click for details</Link></Button>
        </div>
      ); 
    }

    return (
      <div>
        {/* <Nav /> */}
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Detail);
