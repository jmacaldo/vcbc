import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FlexView from 'react-flexview';
import Flexbox from 'flexbox-react';
import BottomNavigationExampleSimple from '../Nav/bottomnav';
import Search from './search'
import Nav from '../../containers/LeftNavContainer'
import Paper from 'material-ui/Paper';
import LoadingGif from './loading.gif'
import Chip from 'material-ui/Chip';
import Focus from './focus'

class Login extends Component {
  handleSubmit(user) {
		this.props.actions.login(user);
  }

  handleDetail(detail) {
    this.props.actions.detail(detail)
  }


  handleSubmitRecipe(recipe) {
    this.props.actions.submitrecipe(recipe);
  }

  componentWillMount(){
    window.addEventListener('load', this.props.actions.allrecipes);
  }

  componentDidMount() {

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

    //array for Tags
    // let tagsarr = [];
    // let arr = this.props.recipeFocus.tags
     console.log('tags_'+this.props.recipeFocus);
    // arr.split(',')
    //

    //
    // for(let i = 0; i <= (tags.length-1); i++) {
    //   tagsarr.push(<Chip style={styles.chip}>
    //          {tags[i]}
    //     </Chip>);
    // }
    //
    // <Chip style={styles.chip}>
    //      Text Chip
    // </Chip>



    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <Flexbox>

          <Nav />
        {this.props.isMainActivated &&

            <div>
               <Paper style={paper} zDepth={3} rounded={true}>

                 <Search data={search}/>

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
                </Form>
            </Paper>
        }

        {this.props.isToolsActivated &&
            <Paper style={paper} zDepth={3} rounded={true} >
              <p>This is the calculator and scaler page</p>
            </Paper>
        }

        {this.props.isFocusActivated &&
            <Focus data={this.props.recipeFocus} />
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
