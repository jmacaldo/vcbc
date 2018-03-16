import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Nav from '../components/Nav'

function mapStateToProps(state) {
  return {
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user,
    allrecipes: state.demo.allrecipes,
    detail: state.demo.detail,
    isregistered: state.demo.isRegistered,
    recipeFocus: state.demo.recipeFocus,
    diagOpen: state.demo.diagOpen,
    comments: state.demo.comments,
    food2fork: state.demo.food2fork,
    edamam: state.demo.edamam,
    isEdamFocus: state.demo.isEdamFocus
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
