import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import AutoCompleteExampleDataSource from '../components/example'

function mapStateToProps(state) {
  return {
    results: state.demo.results,
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user,
    allrecipes: state.demo.allrecipes,
    detail: state.demo.detail,
    isMainActivated: state.demo.isMainActivated,
    isRegActivated: state.demo.isRegActivated,
    isSubmitActivated: state.demo.isSubmitActivated,
    isToolsActivated: state.demo.isToolsActivated,
    isregistered: state.demo.isRegistered,
    isFocusActivated: state.demo.isFocusActivated,
    recipeFocus: state.demo.recipeFocus,
    diagOpen: state.demo.diagOpen,
    comments: state.demo.comments,
    food2fork: state.demo.food2fork

  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteExampleDataSource);
