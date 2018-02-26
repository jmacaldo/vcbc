import {List, ListItem} from 'material-ui/List';
import React, {Component} from 'react';
import classnames from 'classnames';
import Chip from 'material-ui/Chip';
import Search from './search';
import { Control, Form, actions } from 'react-redux-form';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

export default class AddRecipe extends Component {

  handleSubmitRecipe(recipe) {
    this.props.actions.submitrecipe(recipe);
  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div>
        <Paper style={paper} zDepth={3} rounded={true} >
          <Form model="recipe" onSubmit={(recipe) => this.props.actions.submitrecipe(recipe)}>

            <label htmlFor="recipe.title">Recipe Name</label>
            <Control.text model="recipe.title" id="recipe.title" />

            <label htmlFor="recipe.tags">Tags</label>
            <Control.text model="recipe.tags" id="recipe.tags" />

            <label htmlFor="recipe.description">Description</label>
            <Control.text model="recipe.description" id="recipe.description" />

            <label htmlFor="recipe.source">Source</label>
            <Control.text model="recipe.source" id="recipe.source" />

            <label htmlFor="recipe.cooktime">Cook Time</label>
            <Control.text model="recipe.cooktime" id="recipe.cooktime" />

            <label htmlFor="recipe.yield">Yield</label>
            <Control type="number" model="recipe.yield" id="recipe.yield" />

            <button type="submit">Submit</button>
            </Form>
        </Paper>
      </div>
    );
  }
}

const paper = {
  padding: 30,

  marginLeft: 40,
  marginTop: 20,
  maxWidth: 1100
}

const divStyle = {
  maxWidth: 700
}

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 5,
    marginLeft: 6
  },
};
