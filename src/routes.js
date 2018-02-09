import React from 'react';
import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';
import Main from './containers/MainContainer';
import About from './components/About/About';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/main" component={Main} />
      </div>
    </Router>
  )
};

export default Routes;
