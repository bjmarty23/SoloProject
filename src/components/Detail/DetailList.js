import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Nav from '../../components/Nav/Nav';
import { triggerLogout } from '../../redux/actions/loginActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//style
import { withStyles } from '@material-ui/core/styles';
// import { Paper, Typography, Card, Button, TextField } from '@material-ui/core';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';

import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
// import NewLocation from '../NewLocation/NewLocation';
// import swal from 'sweetalert';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ReplyIcon from '@material-ui/icons/Reply'
import Card, { CardContent, } from 'material-ui/Card';
import { Grid } from 'material-ui';


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

const styles = theme => ({
  
  // formControl: {
  //     margin: theme.spacing.unit,
  //     Width: 200,
  // },
});

class DetailList extends Component {
  state={
    location: this.props.state.getDetailReducer,
    name:this.props.state.getDetailReducer.name,
    latitude:this.props.state.getDetailReducer.latitude,
    longitude:this.props.state.getDetailReducer.longitude,
    notes:this.props.state.getDetailReducer.notes,
    type:this.props.state.getDetailReducer.type,
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
    console.log('type',this.state.type, this.props.state.getDetailReducer.type)
    console.log('name', this.state.name)
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
  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  //moved logout into nav bar from screen
  render() {
    const { classes } = this.props;

    let content = null;
    if (this.props.user.userName) {
      
      content = (
       
          <div className="detaillist">
          <h3>{this.props.state.getDetailReducer.name}</h3>
          <h5>Notes: {this.props.state.getDetailReducer.notes}<br />
          Distance: {Math.floor((this.props.state.getDetailReducer.distance) * 100)/100}</h5>
            
          <Link to="/home"><Button variant="fab" color="primary" aria-label="delete" onClick={this.handleClick}>
        <DeleteIcon />
            </Button>   
            </Link>
               <Button variant="fab" color="primary" aria-label="create" onClick={this.handleOpen}>
               <CreateIcon />
            </Button>

          <Modal 
            className="modal"
            aria-labelledby="Edit"
            aria-describedby="Update and edit this location with correct information"
            open={this.state.open}
            onClose={this.handleClose}>
            <div style={getModalStyle()} className="editModal">
            <Typography variant="title" id="modal-title" style={{textAlign:"center"}}>
              Edit and Update
            </Typography>
            <br />
            <div>
              <div className="modalForm">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="Type" >Type</InputLabel>
                    <Select
                      value={this.state.type} //not auto input prev type, not letting new type selection
                      onChange={this.handleInputChangeFor('type')}
                      className={classes.textField}
                      inputProps={{
                          name: 'type',
                          id: 'type',
                      }}>
                      <MenuItem  value="restroom">Restroom</MenuItem>
                      <Divider />
                      <MenuItem  value="waterFountain">Water Fountain</MenuItem>
                      <Divider />
                      <MenuItem  value="restaurant">Restaurant</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                  <br />
                Name:<input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChangeFor('name')}
                  /> <br /> 
                Notes:<textarea rows="5" 
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
              </div>
              <br />
              <div className="buttons">
              <Link to="home"><Button
               variant="fab" color="primary" aria-label="add" onClick={this.updateLocation}>
                <AddIcon />
                </Button></Link>
              <Button variant="fab" color="primary" aria-label="Keyboard_Arrow_Left"  onClick={this.handleClose}>
              <ReplyIcon />
              </Button>
              </div>
          </div>
        </Modal>
         </div>
      );
    }

    return (
      <div>
     
     <Link to="/">
        <button className="logout"
          onClick={this.logout}
          >Log Out
        </button>
     </Link>  
        <div className="back">
            <Link to="/home">
            <Button  variant="fab" color="primary" aria-label="Reply" onClick={this.back}>
            <ReplyIcon /></Button>
            </Link>
        </div>
        <Grid item>
        <Card  className="card" style={{margin: "30px"}} >
        <CardContent>
        { content }
        </CardContent>
        </Card>
        </Grid>
      </div>
    );
  }
}
DetailList.propTypes = {
  classes: PropTypes.object.isRequired,
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(DetailList));
