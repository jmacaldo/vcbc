import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import ApiRecipe from '../components/ApiRecipe'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user,
    allrecipes: state.demo.allrecipes,
    detail: state.demo.detail,
    isregistered: state.demo.isRegistered,
    recipeFocus: state.demo.recipeFocus,
    comments: state.demo.comments,
    edamam: state.demo.edamam,
    profile: state.demo.profile,
    recipeinprofile:  state.demo.recipeinprofile,
    edamamfocus: state.demo.edamamfocus

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiRecipe);
