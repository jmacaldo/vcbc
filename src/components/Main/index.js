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
import Nav from '../../containers/NavContainer'
import Paper from 'material-ui/Paper';
import ReactS3 from 'react-s3';
import LoadingGif from './loading.gif'
import Chip from 'material-ui/Chip';
import AddRecipe from './addrecipe'
import Icon from 'material-ui/svg-icons/action/gif'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ReactS3Uploader from 'react-s3-uploader';
import Edafocus from '../../containers/EdamFocusContainer';
import Focus from '../../containers/FocusContainer';
import RecipeGrid from '../../containers/GridContainer'
import TextField from 'material-ui/TextField';
import Slider from 'react-slick'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


require('dotenv').config()


class Login extends Component {

  componentWillMount(){
    document.body.style.backgroundColor = "rgb(247,247,247)";
  }



  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        autoplay: true,
     autoplaySpeed: 3000,
     adaptiveHeight: true
      };


    const { className, ...props } = this.props;
    let data = this.props.allrecipes
    return (
      <div className={classnames('App', className)} {...props}>
          <div>
            <div style={styles.nav}>
              <Nav />
            </div>
            <div style={styles.slider}>
            <Slider {...settings}>
                {data.map((tile) => (
                <Link to={`/recipe/${tile.id}`}>
                  <GridTile
                      key={tile.id}
                      title={tile.title}
                      actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                      actionPosition="left"
                      titlePosition="top"
                      titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                      titleStyle={styles.title}
                    >
                  <img style={styles.tileImg} src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.img} />
                </GridTile>
              </Link>
                ))}


          </Slider>
        </div>
              <Flexbox>
                <div style={sectionStyle}>

                   {!this.props.allrecipes &&
                     <img style={styles.loadingGif} src={LoadingGif} />
                   }


                  <RecipeGrid />
                </div>
               </Flexbox>
      </div>




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
              <h3>Submit a recipe</h3>
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

      </div> //this is the last closing div
    );
  }
}

//style objects
const cardStyle = {
  width: '25vw',
  minWidth: '400px'
}

const cardImgStyle ={
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%'
}

const sectionStyle = {
  margin: 'auto',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  width: '100vw',
  position: 'absolute',
  zIndex: -2


  // border: 'dotted',
  // borderWidth: 1,
  // borderColor: 'red'
}



const styles = {
  chip: {
    margin: 4,
  },
  tile: {
    height: '600px'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tileImg: {
    height: 400
  },
  nav: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  slider: {
    maxHeight: 400,
    marginBottom: '40px',
    border: 'dotted',
    borderWidth: 1,
    borderColor: 'red'
  },
  loadingGif: {
    margin:'auto',
    alignSelf: 'center',
    marginTop: 300
  }
};

const rotw = {
  width: 400
}

const paper = {
  padding: 30,
  paddingTop: 10,
  marginLeft: 40,
  marginTop: 20
}


Login.propTypes = {
  isauthenticated: PropTypes.bool
};

export default Login;
