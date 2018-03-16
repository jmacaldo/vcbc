import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlexView from 'react-flexview';
import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';
import LoadingGif from './loading.gif'
import Chip from 'material-ui/Chip';
import AddRecipe from './addrecipe';
import Search from '../../containers/SearchContainer';
import NoSearch from '../../containers/NoSearchContainer';
import Icon from 'material-ui/svg-icons/action/gif'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ReactS3Uploader from 'react-s3-uploader';
import Edafocus from '../../containers/EdamFocusContainer';
import Focus from '../../containers/FocusContainer';
import RecipeGrid from '../../containers/GridContainer'
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Jumbotron, FormGroup, FormControl, Button, Glyphicon, Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';
import splash from './splash02.jpg'
import bgr from './bgr.png'




class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);

    this.state = {
      value: ''
    };
 }

 searchHandle(e){
   console.log('search fired');
    window.location = `/search/`+e.target.value;
 }
 handleChange(e) {
     this.setState({ value: e.target.value });
     console.log(e.target.value);
   }
 searchClick(){
     window.location = `/search/`+this.state.value;
 }


  componentWillMount(){
    document.body.style.backgroundColor = "rgb(247,247,247)";
  }



  render() {



    const { className, ...props } = this.props;
    let data = this.props.allrecipes
    return (
      <div className={classnames('App', className)} {...props}>
          <div>
            <div>
              <NoSearch />



              <Jumbotron style={styles.jumbo}>
                <div style={styles.headLineSpan}>
                  <h1>THOUSANDS OF RECIPES<br /> HUNDREDS OF SOURCES<br /> ONE SEARCH BAR</h1>
                    <Navbar.Form onSubmit={(e)=>this.searchHandle()} pullLeft >
                <FormGroup bsSize="large">
                  <FormControl type="text" placeholder="Search" value={this.state.value} onChange={this.handleChange} />
                </FormGroup>{' '}
                <Button onClick={this.searchClick} type="submit"bsSize="large"><Glyphicon glyph="search" bsSize="large" /></Button>
              </Navbar.Form>
                </div>
                <div style={styles.search}>

                </div>


              </Jumbotron>

            </div>
                <div>

                   {!this.props.allrecipes &&
                     <img style={styles.loadingGif} src={LoadingGif} />
                   }

                  <RecipeGrid />
                </div>
      </div>


      <GridList cols={1} cellHeight='200'>
          <GridTile
            key={2}
          >
            <img src={bgr} />
          </GridTile>
        </GridList>



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
  headLine: {
    color: 'white',
    display: 'block',
    margin: 'auto'
  },
  headLineSpan: {
    color: 'white',
    width: '80%',
    display: 'block',
    margin: 'auto',
    marginTop: 20
  },
  label: {
    margin: 'auto',
    width: '80%'
  },
  jumbo: {
    backgroundImage: `url('${splash} ')`,
    backgroundSize: 'cover',
    height: 480
  },
  search: {
    backgroundColor: 'rgba(240,240,240,0.8)',
    width: '50%',
    display: 'block',
    margin: 'auto',
    marginTop: 20
  },
  nav: {
    width: '98%',
    margin: 'auto',
    alignItems: 'center',
  },
  bsbar: {
    backgroundColor: 'white',
    color: 'black'
  },
  loadingGif: {
    margin:'auto',
    alignSelf: 'center',
    marginTop: 300
  }
};




Login.propTypes = {
  isauthenticated: PropTypes.bool
};

export default Login;
