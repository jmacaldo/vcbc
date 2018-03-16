import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import Nav from '../../containers/NavContainer'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import ReactS3Uploader from 'react-s3-uploader';
import RaisedButton from 'material-ui/RaisedButton';
import Bsnav from '../../containers/BsNavContainer';
import bgr from './bgr.png'
import {GridList, GridTile} from 'material-ui/GridList';

import { isEmail, isEmpty } from 'validator';

const required = str => !isEmpty(str);

class Submit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelerr: false,
      tagserr: false,
      pic: ""
    };
  }


  handleSubmitRecipe(recipe) {
		this.props.actions.submitrecipe(recipe, this.props.user.id, this.state.pic);
  }

  onUploadFinish=(file)=>{
    console.log(file.filename.split('/')[1])
    this.setState({pic: file.filename.split('/')[1]})

  }

  handleSubmitFailed(){
    console.log('form failed!');
  }

  render() {
    const { className, ...props } = this.props;

    console.log(this.props.titleValidate);

    let ingredients = [];
    let rows = [];

    return (
      <div className={classnames('Submit', className)} {...props}>
        <div style={styles.main}>
          <Bsnav />

          {!this.props.isauthenticated &&
            <div>You must be logged in to submit a recipe!</div>
          }
          {this.props.isauthenticated &&
            <div>
          <h1 style={styles.container}>Submit a recipe</h1>
          <Form model="recipe" onSubmit={(recipe) => this.handleSubmitRecipe(recipe)}  onSubmitFailed={ () => this.handleSubmitFailed() }>

            <label htmlFor="recipe.title">Recipe Image</label>
            <ReactS3Uploader
            signingUrl="/s3/sign"
            signingUrlMethod="GET"
            s3path="recipes/"
            onFinish={this.onUploadFinish}
            />
          <label></label>

            <label htmlFor="recipe.title">Recipe Name</label>
            <Control.text defaultValue={''} validators={required} errorText={this.props.titleValidate? "" : "Recipe name is required"} component={TextField} model="recipe.title" id="recipe.title" />

            <label htmlFor="recipe.tags">Tags</label>
            <Control.text defaultValue={''} validators={required} errorText={this.props.tagsValidate? "" : "Tags are required"} component={TextField} model="recipe.tags" id="recipe.tags" />

            <label htmlFor="recipe.source">Source</label>
            <Control.text defaultValue={''} validators={required} errorText={this.props.sourceValidate? "" : "Source is required"} component={TextField} model="recipe.source" id="recipe.source" />

            <label htmlFor="recipe.url">Source URL</label>
            <Control.text defaultValue={''} validators={required} errorText={this.props.urlValidate? "" : "Source URL is required"} component={TextField} model="recipe.url" id="recipe.url" />

            <label htmlFor="recipe.cooktime">Cook Time</label>
            <Control type="number" defaultValue={''} validators={required} errorText={this.props.cooktimeValidate? "" : "Cook time is required"} component={TextField} model="recipe.cooktime" id="recipe.cooktime" />

            <label htmlFor="recipe.yield">Yield</label>
            <Control defaultValue={''} validators={required} errorText={this.props.yieldValidate? "" : "Yield is required"} component={TextField} type="number" model="recipe.yield" id="recipe.yield" />

            <label></label>
            <RaisedButton type="submit" label="Submit" fullWidth={false} />

          </Form>
          </div>
        }
        </div>
        <GridList cols={1} cellHeight='200' style={styles.footer}>
            <GridTile
              key={2}
            >
              <img src={bgr} />
            </GridTile>
          </GridList>
      </div>
    );
  }
}

const styles = {
  nav: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 40,
  },
  footer: {
    marginTop: 40,
    position: 'absolute',
    bottom: 0
  },
  container: {
    marginTop: 100
  },
  main: {
    width: '80%',
    margin: 'auto',
  }
}
export default Submit;
