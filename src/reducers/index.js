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

const Reducers = combineReducers({
    demo,
    routing: routerReducer,
    ...createForms({
      userreg: initialRegState,
      userlogin: initialLoginState

    })
});

export default Reducers;
