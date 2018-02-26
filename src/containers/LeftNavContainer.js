import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Nav from '../components/Main/leftnav'

function mapStateToProps(state) {
  return {
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
