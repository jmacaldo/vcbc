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

  }

  render() {
    const { className, ...props } = this.props;



    return (


      <div>
        <Nav />
          <GridList cols={1} cellHeight='400'>
              <GridTile
                title={this.props.edamamfocus.label}
                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                actionPosition="right"
                titlePosition="top"
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


            <div style={styles.headerText}>
              Uploads ({this.props.recipeinprofile.length})
            </div>
        <Flexbox style={styles.container}>
          <GridList
            cols={5}
            cellHeight={200}
            padding={1}
            style={styles.gridList}
          >
            {this.props.recipeinprofile.map((tile) => (
              <GridTile
                key={tile.id}
                title={tile.title}
                titlePosition="bottom"
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                cols={tile.featured ? 1 : 1}
                rows={tile.featured ? 1 : 1}
                onClick={() => this.handleDetail(tile)}
              >
                <img style={styles.gridImg} src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.img} />
              </GridTile>
            ))}

          </GridList>

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
    marginTop: 10
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
