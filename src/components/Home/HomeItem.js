import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import PropTypes from 'prop-types';
//style
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Card, Button, TextField } from '@material-ui/core';
import { MenuItem, InputLabel, Select, FormControl, Divider, } from '@material-ui/core';


const mapStateToProps = state => ({
  user: state.user,
  location: state.getDataReducer,
  state,
});

const styles = theme => ({
  
  // formControl: {
  //     margin: theme.spacing.unit,
  //     Width: 200,
  // },
});

class HomeItem extends Component {
  constructor(){
    super();
    this.state={
    location: '',
    type: '',
    }
  }
  

  //find button clicked ****** SPECIFY THE TYPE CLICKED query for type in db 
  getTypeLocation = () => {
    // console.log('get type',this.props.location)Current coding
    // console.log('get type',this.props.state.getDataReducer.type)
    this.props.dispatch({ type: 'GET_TYPE',
                          payload: this.state.type})
  }
  // submit = () => {
//     this.props.dispatch({
//         type: 'GET_PERSON_DATA_COUNTY', 
//         payload: this.state
//     })
// }

  handleChangeFor = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }); 
}

  componentDidMount () {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    console.log(this.props.state.getCountyReducer)
}
render(){
  const { classes } = this.props;

  return(
    <div>
      <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="Type">Type</InputLabel>
            <Select
                value={this.state.type}
                onChange={this.handleChangeFor}
                className={classes.textField}
                inputProps={{
                    name: 'type',
                    id: 'type',
                }}>
                <MenuItem  value="restroom">Restroom</MenuItem>
                <Divider />
                <MenuItem  value="waterFountain">Water Fountain</MenuItem>
                <Divider />
                <MenuItem value="restaurant">Restaurant</MenuItem>
            </Select>
        </FormControl>
      </div>
      {/* <select className="homeDropDown"> */}
      <Button
        name="submit"
        variant="flat"
        color="primary"
        onClick={this.getTypeLocation}>
        Submit
      </Button>
    </div>
  )
}

}
HomeItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withStyles(styles)(HomeItem));
