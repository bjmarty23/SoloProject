
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

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

  handleClickAddLocation = (newType) =>{
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
          <Link to="/home">
        <button onClick={this.back}>Back</button>
        </Link>
          <h1
            id="newLocation"
          >
            Add new water source!
          </h1>
          
          <div>
          <select className="newLocationDropDown" 
          // value={this.state.type}
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
            <textarea rows="4" 
            cols="50" 
            type="notes"
            name="comment" 
            value={this.state.notes}
            onChange={this.handleInputChangeFor('notes')}
            form="usrform">Enter text here..</textarea> 
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
              <button onClick={this.handleClickAddLocation}>Add New</button>
              <button onClick={this.locate}>location button icon</button>                    
          </div>
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
export default connect(mapStateToProps)(NewLocation);

