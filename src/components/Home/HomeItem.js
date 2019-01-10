import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import PropTypes from 'prop-types';
//style
import { withStyles } from '@material-ui/core/styles';
import { Button} from '@material-ui/core';
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
  
  // cant use this because i would have to change detail state
  //find button clicked ****** SPECIFY THE TYPE CLICKED query for type in db 
  // getTypeLocation = () => {
  //   // console.log('get type',this.props.location)Current coding
  //   // console.log('get type',this.props.state.getDataReducer.type)
  //   this.props.dispatch({ type: 'GET_TYPE',
  //                         payload: this.state.type})
  // }
  
//i want to pull state but state is establishe after this dispatch
getTypeLocation = () => {
  this.props.dispatch({ type: 'GET_TYPE',
                        payload: this.state.type})
}

//adding type param in distance router
  // getTypeLocation = () => {
  //   this.props.dispatch({ type: 'GET_TYPE',
  //                         payload: this.state.type})
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
    // console.log(this.props.state.getCountyReducer)
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
                <MenuItem  value="Restroom">Restroom</MenuItem>
                <Divider />
                <MenuItem  value="Fountain">Water Fountain</MenuItem>
                <Divider />
                <MenuItem value="Restaurant">Restaurant</MenuItem>
            </Select>
        </FormControl>
      </div>
      {/* <select className="homeDropDown"> */}
      <Button
        name="submit"
        variant="flat"
        color="primary"
        onClick={this.getTypeLocation}>
        {/* can i write a function with conditional to update on click
        is there a way to sort with the current distance sorting and then by type  */}
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
