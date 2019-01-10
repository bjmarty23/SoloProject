
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
// import Button from 'material-ui/Button';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ReplyIcon from '@material-ui/icons/Reply'
import LocationSearchingIcon from '@material-ui/icons/LocationSearching'
import Card, { CardContent, } from 'material-ui/Card';
import { Grid } from 'material-ui';


//gives you access to store 
const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  latitude: state.getDataReducer.latitude,
  state,
});


class NewLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: '',
      name: '',
      type: '',
      notes: '',
    }
  }
  componentWillMount () {
   this.locate();
    // console.log(this.state.latitude)
  }
  logout = () => {
    this.props.dispatch(triggerLogout());
  }
  //write funtionality to sync to device location
  locate = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      console.log(latitude, longitude);
      // setState for user location
      this.setState({
         latitude: latitude,
         longitude: longitude,
      });
    });
  }


  AddLocation = (newType) => {
    // event.preventDefault();
    console.log('clicked', this.state)
    this.props.dispatch({
      type: 'ADD_LOCATION',
      payload: this.state
    })
    console.log(this.state)
  }

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
  

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="newlocation">
          Type:<select className="newLocationDropDown"
            // value={this.state.type}
            name="type" onChange={this.handleInputChangeFor('type')}>
            <option>Select One</option>
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
          Notes:<textarea 
            rows="1"
            cols="40"
            type="notes"
            name="comment"
            value={this.state.notes}
            //placeholder="Enter text here.." 
            onChange={this.handleInputChangeFor('notes')}
            form="usrform">dsf</textarea>
          <br />
          {/* // auto input user location when adding a newLocation */}
         <p id="locationMessage"> DO NOT change location unless different than current position!</p>
          Lat:<input
            type="latitude"
            name="latitude"
            value= {this.state.latitude}
            onChange={this.handleInputChangeFor('latitude')}
           />
           <br />
          Long:<input
            type="longitude"
            name="longitude"
            value={this.state.longitude}
            onChange={this.handleInputChangeFor('longitude')}
          />
        </div>
        
      );
    }

    return (
      <div>

        <Link to="/home">
          <Button size="small" variant="fab" color="primary" aria-label="add" onClick={this.back}><ReplyIcon /></Button>
        </Link>
       
          <Grid item>
            <Card className="card" style={{ margin: "20px" }} >
              <CardContent>
                <h3 id="newLocationGreeting">
                Add new water source!
                </h3>

                {content}
                <div className="buttons">
                  <Link to="/home"><Button variant="fab" color="primary" aria-label="add" size="small" onClick={this.AddLocation}><AddIcon /></Button></Link>
                  <Button variant="fab" color="primary" aria-label="add" size="small" onClick={this.locate}><LocationSearchingIcon /></Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        {/* // removed button here, placed inside card. */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(NewLocation);

