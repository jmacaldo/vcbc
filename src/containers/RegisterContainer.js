import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Register from '../components/Register'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    isregistered: state.demo.isRegistered,
    usererror: state.demo.userError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
