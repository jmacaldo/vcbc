import * as Actions from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Submit from '../components/Submit'

function mapStateToProps(state) {
  return {
    isauthenticated: state.demo.isAuthenticated,
    user: state.demo.user,
    allrecipes: state.demo.allrecipes,
    isregistered: state.demo.isRegistered,
    titleValidate: state.forms.recipe.title.valid,
    tagsValidate: state.forms.recipe.tags.valid,
    sourceValidate: state.forms.recipe.source.valid,
    urlValidate: state.forms.recipe.url.valid,
    cooktimeValidate: state.forms.recipe.cooktime.valid,
    yieldValidate: state.forms.recipe.yield.valid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit);
