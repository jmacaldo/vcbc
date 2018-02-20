import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Submit from '../components/Submit'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    isregistered: state.demo.isRegistered,
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
