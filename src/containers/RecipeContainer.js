import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Recipe from '../components/Recipe'

function mapStateToProps(state) {
  return {
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user,
    allrecipes: state.demo.allrecipes,
    detail: state.demo.detail,
    recipeFocus: state.demo.recipeFocus,
    comments: state.demo.comments,
    fave: state.demo.isFave

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
