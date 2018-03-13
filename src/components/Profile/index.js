import {List, ListItem} from 'material-ui/List';
import React, {Component} from 'react';
import classnames from 'classnames';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import { Control, Form, actions } from 'react-redux-form';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import ReactStars from 'react-stars';
import RaisedButton from 'material-ui/RaisedButton';
import Flexbox from 'flexbox-react';
import Nav from '../../containers/NavContainer'
import Cows from './cows.jpg'

export default class Profile extends Component {

  componentWillMount(){
    this.props.actions.loadUser(this.props.match.params.username);
    document.body.style.backgroundColor = "rgb(247,247,247)";
  }

  render() {
    const { className, ...props } = this.props;



    return (


      <div>
      <div style={styles.nav}>
        <Nav />
      </div>
          <GridList cols={1} cellHeight='400'>
              <GridTile
                titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                titleStyle={styles.gridTitle}
              >
                <img style={styles.splash} src={Cows} />
              </GridTile>
            </GridList>


            <Flexbox style={styles.infoBar}>

            </Flexbox>

            <Flexbox style={styles.overlay}>
              <div style={styles.avatar}>
                  <Avatar style={styles.avatar} size={120} src={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.profile.img} />
              </div>
              <div style={styles.username}>
                  {this.props.profile.username}
              </div>
            </Flexbox>

            <Flexbox style={styles.twocolumns}>

              <div style={styles.column}>
              <div style={styles.headerText}>
                Uploads ({this.props.recipeinprofile.length})
              </div>

              <Paper style={styles.nav} zDepth={3}>
                <List>
                    {this.props.recipeinprofile.map((tile) => (
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.img} />
                    }
                  >
                    {tile.title}
                  </ListItem>
                  ))}
                </List>
              </Paper>
              </div>

              <div style={styles.column}>
              <div style={styles.headerText}>
                Favorites ({this.props.userfaves.length})
              </div>

              <Paper style={styles.container} zDepth={3}>
                <List>
                    {this.props.userfaves.map((tile) => (
                  <ListItem
                    disabled={true}
                    leftAvatar={
                      <Avatar src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.recipe.img} />
                    }
                  >
                    {tile.recipe.title}
                  </ListItem>
                  ))}

                  {this.props.apifaves.map((tile) => (
                <ListItem
                  disabled={true}
                  leftAvatar={
                    <Avatar src={tile.image} />
                  }
                >
                  {tile.label}
                </ListItem>
                ))}





                </List>
              </Paper>
              </div>
            </Flexbox>






      </div>




    );
  }
}



const styles = {
  chip: {
    margin: 4,
  },
  infoBar: {
    width:'100%',
    height:400,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    flexDirection: 'column',
    marginTop:-402,
    opacity: .5,
    zIndex: -3
  },
  twocolumns: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  column: {
    minWidth: 300,
    width: '40%'
  },
  overlay: {
    width:'100%',
    height:400,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    marginTop:-402,
    zIndex: 10,
    position: 'relative',
  },
  splash: {
    zIndex: -3
  },
  avatar: {
    marginTop:40,
    padding: 0
  },
  headerText: {
    width: '80%',
    margin: 'auto',
    marginTop: 40
  },
  container: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 100
  },
  nav: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: '30px',
    color: 'white',
    marginBottom: 100
  },
  info: {
    marginTop: -10,
  },
  gridTitle: {
    fontSize: '30px',
    marginTop: 15,
    zIndex: -2
  },
  infoLabel: {
    fontSize: '15px',
    marginTop: -15,
    color: 'rgb(200,200,200)'
  },
  commentHeader:{
    fontSize: '30px',
    marginBottom: '10px'
  },
  infoContainer: {
    flexWrap: 'wrap-reverse',
    width: '90%'
  },
  commentBox: {
    width: '100%',
    margin: 'auto',
    padding: 25,
    marginBottom: 40
  },
  mainContainer: {
    width: '65%',
    margin: 'auto'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  stars: {
    marginLeft: '15px'
  },
  main: {
    margin: 'auto'
  },
  root: {
    margin: 'auto',
    width: '100vw'
  },
  title: {
    height: 300
  },
  paper: {
    marginBottom: '20px',
    padding: '20px'
  },
  comment: {
    marginLeft: 71,
    marginTop: -10
  },
  cooktime: {
    marginLeft: 71
  },

};
