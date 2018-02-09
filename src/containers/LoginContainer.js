import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Login from '../components/Login'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
