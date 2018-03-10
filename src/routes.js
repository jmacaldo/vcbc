import React from 'react';
import Login from './containers/LoginContainer';
import Register from './containers/RegisterContainer';
import Main from './containers/MainContainer';
import About from './components/About/About';
import Submit from './containers/SubmitContainer';
import Profile from './containers/ProfileContainer';
import Recipe from './containers/RecipeContainer';
import ApiRecipe from './containers/ApiRecipeContainer';
import SearchPage from './containers/SearchPageContainer';
import AutoCompleteExampleDataSource from './containers/ExampleContainer'

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
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="/recipe/:id" component={Recipe} />
        <Route exact path="/api/:uri" component={ApiRecipe} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/example" component={AutoCompleteExampleDataSource} />
        <Route exact path="/search/:query" component={SearchPage} />
      </div>
    </Router>
  )
};

export default Routes;
