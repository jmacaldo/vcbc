import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import Nav from '../Nav'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class Submit extends Component {
  handleSubmitRecipe(recipe) {
		this.props.actions.submitrecipe(recipe);
  }



  handleSubmitIngredient(ingredient, recipe ) {
		this.props.actions.submitingredient(ingredient, recipe);
  }



  render() {
    const { className, ...props } = this.props;
    const style = {
  marginLeft: 20,
};


    let ingredients = [];
    let rows = [];

    if (this.props.ingredientsubmit) {
      ingredients = this.props.ingredients.data
      for(var i = 0; i < ingredients.length; i++) {
        rows.push(<div key={i}><span>{ingredients[i].quantity}</span>{' '}<span>{ingredients[i].measure}</span>{' '}<span>{ingredients[i].item}</span>{' '}<span>{ingredients[i].prep}</span> </div>);
      }
    }

    return (
      <div className={classnames('Submit', className)} {...props}>
      <Nav />
      {!this.props.submitted &&
        <div>
        <h1>Submit a recipe</h1>
        <Form model="recipe" onSubmit={(recipe) => this.handleSubmitRecipe(recipe)}>

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

          <Paper zDepth={2}>
           <TextField hintText="First name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Middle name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Last name" style={style} underlineShow={false} />
           <Divider />
           <TextField hintText="Email address" style={style} underlineShow={false} />
           <Divider />
         </Paper>
        </Form>
        </div>
      }
      {this.props.submitted &&
        <div>
        <h3>Ingredients</h3>
        <p>Add ingredients for {this.props.recipe.title}</p>
        <Form model="ingredient" onSubmit={(ingredient) => this.handleSubmitIngredient(ingredient, this.props.recipe)}>

          <label htmlFor="ingredient.quantity">Quantity</label>
          <Control type="number" model="ingredient.quantity" id="ingredient.quantity" />

          <label htmlFor="ingredient.measure">Measuring Unit</label>
          <Control.text model="ingredient.measure" id="ingredient.measure" />

          <label htmlFor="ingredient.item">Item</label>
          <Control.text model="ingredient.item" id="ingredient.item" />

          <label htmlFor="ingredient.prep">Preparation</label>
          <Control.text model="ingredient.prep" id="ingredient.prep" />

          <button type="submit">Submit!</button>
        </Form>
        <div>{rows}</div>
        </div>

      }

      </div>
    );
  }
}

export default Submit;
