import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
// import NewLocation from '../NewLocation/NewLocation';
// import swal from 'sweetalert';




const mapStateToProps = state => ({
  user: state.user,
  locations: state.locations,
  state
});

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    position: 'absolute',
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
//   styles = () => ({
//   paper: {
//     position: 'absolute',
//     width: theme.spacing.unit * 50,
//     backgroundColor: theme.palette.background.paper,
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing.unit * 4,
//   },
// });

class DetailList extends Component {
  state={
    location: this.props.state.getDetailReducer,
    name:this.props.state.getDetailReducer.name,
    latitude:this.props.state.getDetailReducer.latitude,
    longitude:this.props.state.getDetailReducer.longitude,
    notes:this.props.state.getDetailReducer.notes,
    open: false,
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
    this.props.state.getDetailReducer = this.state
    console.log('in update', this.state)
    this.props.dispatch({
      type: 'UPDATE_LOCATION',
      payload: this.state
    })
  }
  
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
      ...this.state.longitude,
      [propertyName]: event.target.value, 
      ...this.state.latitude,
      [propertyName]: event.target.value,
      ...this.state.name,
      [propertyName]: event.target.value, 
      ...this.state.type,
      [propertyName]: event.target.value, 
      ...this.state.notes,
      [propertyName]: event.target.value,
    });
  }

  //moved logout into nav bar from screen
  render() {
    let content = null;
    console.log('NOTES', this.state.notes);
    if (this.props.user.userName) {
      
      content = (
        <div>
          <h3>{this.props.state.getDetailReducer.name}</h3>
          <h5>Notes: {this.props.state.getDetailReducer.notes}<br />
          Distance: {Math.floor((this.props.state.getDetailReducer.distance) * 100)/100}</h5>
            
          <Link to="/home"><button
            onClick={this.handleClick}>
            Delete</button>
            </Link>
            <button
            onClick={this.handleOpen}>edit
            </button>

          <Modal
            aria-labelledby="Edit"
            aria-describedby="Update and edit this location with correct information"
            open={this.state.open}
            onClose={this.handleClose}>
            <div style={getModalStyle()} className="editModal">
            <Typography variant="title" id="modal-title">
              Edit and Update
            </Typography>
            {/* < NewLocation /> */}
            {/* <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}

            <div>
              <select className="newLocationDropDown" 
                
                name="type" onChange={this.handleInputChangeFor('type')}>
                  <option value="">Type:</option>
                  <option value="Restroom">Restroom</option>
                  <option value="Fountain">Water Fountain</option>
                  <option value="Restaurant">Restaurant</option>
                  </select><br />
                Name:<input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChangeFor('name')}
                  /> <br /> 
                  <textarea rows="5" 
                  cols="40" 
                  type="notes"
                  name="comment" 
                  value={this.state.notes}
                  onChange={this.handleInputChangeFor('notes')}
                  form="usrform"></textarea> 
                  <br />                    
                Lat:<input
                  type="latitude"
                  name="latitude"
                  value={this.state.latitude}
                  onChange={this.handleInputChangeFor('latitude')}
                  /> <br /> 
                Long:<input
                  type="longitude"
                  name="longitude"
                  value={this.state.longitude}
                  onChange={this.handleInputChangeFor('longitude')}
                  /> 
              </div><button onClick={this.updateLocation}><Link to="home">Update</Link></button>
              <button onClick={this.handleClose}>Cancel</button>

          </div>
        </Modal>
         </div>
      );
    }

    return (
      <div>
     
        <Nav />
        <Link to="/home">
      <button onClick={this.back}>Back</button>
      </Link>
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DetailList);
