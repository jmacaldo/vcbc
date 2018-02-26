import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlexView from 'react-flexview';
import Flexbox from 'flexbox-react';
import BottomNavigationExampleSimple from '../Nav/bottomnav';
import Search from './search'
import Nav from '../../containers/LeftNavContainer'
import Paper from 'material-ui/Paper';
import ReactS3 from 'react-s3';
import LoadingGif from './loading.gif'
import Chip from 'material-ui/Chip';
import Focus from '../../containers/FocusContainer';
import AddRecipe from './addrecipe'
import Icon from 'material-ui/svg-icons/action/gif'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ReactS3Uploader from 'react-s3-uploader';
import Sample from './sample.jpg'
import AppBarExampleComposition from './appbar'
require('dotenv').config()



class Login extends Component {
  handleSubmit(user) {
		this.props.actions.login(user);
  }

  handleDetail(detail) {
    this.props.actions.detail(detail);
    this.props.actions.findbyrecipe(detail);
  }


  handleSubmitRecipe(recipe) {
    this.props.actions.submitrecipe(recipe, this.props.user.id);
  }

  componentWillMount(){
    window.addEventListener('load', this.props.actions.allrecipes);

  }

  componentDidMount() {

  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };



  handleClose = () => {
    this.setState({open: false});
  };

  onUploadStart =(file,next)=>{
    this.props.actions.filename(file.name)
    next(file)
  }

  onUploadFinish=(file)=>{
    this.props.actions.recipeimg(file.filename.split('/')[1])
  }




  render() {







    //pushing all contents of recipe DB into an array for rendering in the DOM
    let rows = [];
    let search = [];
    let allrecipes = this.props.allrecipes

    for(let i = 0; i <= (allrecipes.length-1); i++) {
      rows.push(<Flexbox onClick={() => this.handleDetail(allrecipes[i])}><Card style={cardStyle} key={i}>
       <CardMedia overlay={<CardTitle title={allrecipes[i].title} subtitle={allrecipes[i].description} />}>
         <img src={'https://s3.amazonaws.com/vcbc/recipes/'+allrecipes[i].img} alt="" />
       </CardMedia>
     </Card></Flexbox>);
     search.push(allrecipes[i].title)
    }

    //array push for comments

    let allcomments = this.props.comments;
    console.log(allcomments);

    const actions = [
     <FlatButton
       label="Close"
       primary={true}
       onClick={this.handleClose}
     />
   ];





    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Flexbox>


        {this.props.isMainActivated &&

            <div>
              <AppBarExampleComposition />

               <Paper style={paper} zDepth={3} rounded={true}>
                 <Search data={search}/>




                   <div>

        </div>

                 <div style={sectionStyle}>
                   <h5>Previous Weeks Recipes</h5>
                   <div style={prevweek}>
                     {this.props.isLoading &&
                       <img src={LoadingGif} />
                     }
                     {rows}
                </div>
             </div>
           </Paper>

            </div>
        }

        {this.props.isRegActivated &&
            <Paper style={paper} zDepth={3} rounded={true} >
              <h3>User Login </h3>
              <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>

                <label htmlFor="userlogin.username">Username</label>
                <Control.text model="userlogin.username" id="userlogin.username" />

                <label htmlFor="userlogin.password">Password</label>
                <Control.text type="password" model="userlogin.password" id="userlogin.password" />

                <button type="submit">Submit!</button>
              </Form>

              {!this.props.isauthenticated &&
                <p>Dont have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</p>
              }

              <h1>VCBC New User Registration</h1>
              <Form model="userreg" onSubmit={(user) => this.handleSubmit(user)}>

                <label htmlFor="userreg.firstname">First Name</label>
                <Control.text model="userreg.firstname" id="userreg.firstname" />

                <label htmlFor="userreg.lastname">Last Name</label>
                <Control.text model="userreg.lastname" id="userreg.lastname" />

                <label htmlFor="userreg.username">Username</label>
                <Control.text model="userreg.username" id="userreg.username" />

                <label htmlFor="userreg.password">Password</label>
                <Control.text type="password" model="userreg.password" id="userreg.password" />

                <button type="submit">Submit!</button>
              </Form>

              {this.props.isregistered &&
                <p>You've succefully created an account! Click <Link to={`/`}>HERE</Link> to sign in!</p>
             }
            </Paper>
        }

        {this.props.isSubmitActivated &&



            <Paper style={paper} zDepth={3} rounded={true} >
              <Form model="recipe" onSubmit={(recipe) => this.props.actions.submitrecipe(recipe, this.props.user.id)}>

                <ReactS3Uploader
                signingUrl="/s3/sign"
                signingUrlMethod="GET"
                s3path="recipes/"
                onFinish={this.onUploadFinish}
                />

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


        }

        {this.props.isToolsActivated &&
            <Paper style={paper} zDepth={3} rounded={true} >
              <p>This is the calculator and scaler page</p>
            </Paper>
        }

        {this.props.isFocusActivated &&
            <Focus data={this.props.recipeFocus} auth={this.props.isauthenticated} comments={this.props.comments} submitComment={this.props.actions.submitComment}/>
        }





        </Flexbox>
      </div> //this is the last closing div
    );
  }
}

//style objects
const cardStyle = {
  marginBottom: 35,
  marginRight: 40,
  width: 275,
  fontSize: 10
}

const sectionStyle = {
  margin: 'auto',
  // border: 'dotted',
  // borderWidth: 1,
  // borderColor: 'red'
}

const prevweek = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flexStart',
  flexWrap: 'wrap'
}

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const rotw = {
  width: 400
}

const paper = {
  padding: 30,
  paddingTop: 10,
  marginLeft: 40,
  marginTop: 20,
  maxWidth: 1100
}

const divStyle = {
  maxWidth: 700
}


Login.propTypes = {
  isauthenticated: PropTypes.bool
};

export default Login;
