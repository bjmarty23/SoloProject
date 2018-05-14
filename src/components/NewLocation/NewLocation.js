
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
// import add_button from 'material-ui/icon';
// import Nav from '../../components/Nav/Nav';

//gives you access to store 
const mapStateToProps = state => ({
  user: state.user,
  location: state.location
});

class NewLocation extends Component {
  constructor(props){
    super(props);

    this.state={
      latitude: '',
      longitude:'',
      name: '',
      type:'',
      notes: '',
    }
  }  

  AddLocation = (newType) =>{
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
  //write funtionality to sync to device location
  locate = () =>{
    console.log('locate button clicked',this.state)
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
          <div>
          <select className="newLocationDropDown" 
          // value={this.state.type}
          name="type" onChange={this.handleInputChangeFor('type')}>
              <option value="pick here">Type:</option>
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
            <textarea rows="2" 
            cols="40" 
            type="notes"
            name="comment" 
            value={this.state.notes}
            placeholder="Enter text here.."
            onChange={this.handleInputChangeFor('notes')}
            form="usrform">dsf</textarea> 
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
      );
    }

    return (
      <div>
        
         <Link to="/home">
        <Button size="small" variant="raised" color="primary" type="submit" onClick={this.back}>Back</Button>
        </Link>
          <h1
            id="newLocation"
          >
            Add new water source!
          </h1>
        { content }
        <Link to="/home"><Button size="small" variant="raised" color="primary" type="submit" onClick={this.AddLocation}>Add New</Button></Link>
              <button onClick={this.locate}>location button icon</button> 
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(NewLocation);

