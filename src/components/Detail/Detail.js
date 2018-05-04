import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import { Link } from 'react-router-dom';



const mapStateToProps = state => ({
  user: state.user,
});

class Detail extends Component {
  
  

  //moved logout into nav bar from screen
  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
            <Link to="/home">
        <button onClick={this.back}>Back</button>
        </Link>
          <h1
            id="welcome"
          >
            Details and Edit
          </h1>
          <div>
            {/* <h3>{this.state.name}</h3> */}
            </div>
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
export default connect(mapStateToProps)(Detail);
