import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import './index.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-flexview/lib/flexView.css'


const middleware = applyMiddleware(thunk, createLogger());
const store = createStore(rootReducer, composeWithDevTools(
  middleware,
));


ReactDOM.render(
  <Provider store={store}>
     <MuiThemeProvider>
       <Routes />
     </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
