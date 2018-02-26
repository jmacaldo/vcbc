import React from 'react';
import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';
import Main from './containers/MainContainer';
import About from './components/About/About';
import Submit from './containers/SubmitContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/about" component={About} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/submit" component={Submit} />
      </div>
    </Router>
  )
};

export default Routes;
