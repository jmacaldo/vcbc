import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import demo from './demo';

const initialRegState = {
  firstname: '',
  lastname: '',
  username: '',
  password: ''
};

const initialLoginState = {
  username: '',
  password: ''
};

const initialRecipeState = {
  title: '',
  tags: '',
  description: '',
  source: '',
  yield: '',
  cooktime: ''
};

const initialIngredientState = {
  quantity: '',
  measure: '',
  item: '',
  prep: ''
};

const Reducers = combineReducers({
    demo,
    routing: routerReducer,
    ...createForms({
      userreg: initialRegState,
      userlogin: initialLoginState,
      recipe: initialRecipeState,
      ingredient: initialIngredientState

    })
});

export default Reducers;
