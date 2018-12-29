import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import PropTypes from 'prop-types';
import Detail from '../Detail/Detail';


const mapStateToProps = state => ({
  user: state.user,
  location: state.getDataReducer,
  state,
  type: state.typeReducer,
}); 

class Type extends Component {
  constructor(){
    super();
    this.state={
    location: '',
    type: '',
    }
  }

  componentDidMount () {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    // console.log(this.props.state.getCountyReducer)
}
  render(){
    // const { classes } = this.props;
    let types = this.props.type.map((type) => {
      console.log('type',type);
      return (<Detail key={type.id}
        type={type} />
      )
    });
    return(
      <div>
      <pre className="locations">
              {types}
            </pre>
      </div>
    ) 
  }
}
// Type.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Type);