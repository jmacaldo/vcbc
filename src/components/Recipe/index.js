import {List, ListItem} from 'material-ui/List';
import React, {Component} from 'react';
import classnames from 'classnames';
import Chip from 'material-ui/Chip';
import Search from './search'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Close from './ic_close_black_24px.svg';
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
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import FaveBorder from 'material-ui/svg-icons/action/favorite-border';

export default class Recipe extends Component {

  state = {
    rating: '',
  };

  componentWillMount(){
    this.props.actions.findbyid(this.props.match.params.id)
    this.props.actions.findcommentsbyrecipe(this.props.match.params.id)
    document.body.style.backgroundColor = "rgb(247,247,247)";
    this.props.actions.isLocalFave(this.props.user.id, this.props.match.params.id)
  }

  componentWillUnmount(){
    this.props.actions.faveFalse()
  }


  handleSubmitComment(comment){
    console.log(comment);
    this.props.actions.submitComment(comment)
  }


  render() {
    const { className, ...props } = this.props;

    let tagsarr = [];


    if (this.props.recipeFocus.tags){

    for(let i = 0; i <= (this.props.recipeFocus.tags.split(',').length-1); i++) {
      tagsarr.push(<div style={styles.wrapper} key={i}><Chip style={styles.chip}>
             {this.props.recipeFocus.tags.split(',')[i]}
        </Chip></div>);
      }
    }

    console.log(tagsarr);

    //set rating to component state
    const ratingChanged = (newRating) => {
      this.setState({rating: newRating})
      console.log(newRating)
      console.log(this.state.rating);
    }

    //calculate average cooktime for a recipe
    let totalcooktime = []



    {this.props.comments.map(function(object) {
        totalcooktime.push(object.cooktime)
        }
    )}

    console.log(totalcooktime);

    let total = 0;
    for(let j = 0; j < totalcooktime.length; j++) {
    total += totalcooktime[j];
}
let avg = Math.floor(total / totalcooktime.length);

const avedom = () =>{
  if (totalcooktime==0) {
    return
  } else if (totalcooktime>=1) {
    return(
      <p>One person took an average of {avg} minutes to make this recipe</p>
    )
  } else  {
    return(
      <p>{totalcooktime.length} people took an average of {avg} minutes to make this recipe</p>
    )
  }
}

//calculate average rating

let totalratingarray=[]
{this.props.comments.map(function(object) {
    totalratingarray.push(object.rating)
    }
)}

console.log(totalratingarray);

let totalratingsum = 0;
for(let j = 0; j < totalratingarray.length; j++) {
  totalratingsum += totalratingarray[j];
}

let avgrating = totalratingsum / totalratingarray.length;

console.log(avgrating);


    let recipeid = this.props.recipeFocus.id;
    let userid = this.props.user.id;

  const faveHandler =(e,user,recipe) =>{
    e.preventDefault();
    this.props.actions.localFave(user,recipe)
  }








    return (
      <div style={styles.main}>
        <div style={styles.container}>
          <Nav />
        </div>
          <div style={styles.root}>
            <GridList cols={1} cellHeight='400'>
                <GridTile
                  key={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.recipeFocus.img}
                  title={this.props.recipeFocus.title}
                  actionIcon={<IconButton><StarBorder onClick={(e)=>faveHandler(e,recipeid,userid)} color="white" /></IconButton>}
                  actionPosition="right"
                  titlePosition="top"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  titleStyle={styles.gridTitle}
                >
                  <img src={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.recipeFocus.img} />
                </GridTile>
              </GridList>
              <Flexbox style={styles.infoBar}>
                <div style={styles.info}>
                  {this.props.recipeFocus.source} <div style={styles.infoLabel}><p><i>Source</i></p></div>
                </div>
                <div style={styles.info}>
                  {this.props.recipeFocus.yield} <div style={styles.infoLabel}><p><i>Yield</i></p></div>
                </div>
                <div style={styles.info}>
                  {this.props.recipeFocus.cooktime} <div style={styles.infoLabel}><p><i>Minutes</i></p></div>
                </div>
              </Flexbox>


        <div style={styles.commentContainer}>
          {avedom()}
            <div style={styles.wrapper}>
              {tagsarr}
              </div>
              <div >
                {!this.props.fave && this.props.isauthenticated &&
                  <Flexbox style={styles.favePrompt}>
                    <IconButton>
                      <FaveBorder onClick={(e)=>faveHandler(e,userid,recipeid)} color="red" />
                    </IconButton>
                    <div>Set this recipe as a favorite!</div>
                  </Flexbox>
              }
                {this.props.fave && this.props.isauthenticated &&
                  <Flexbox style={styles.favePrompt}>
                    <IconButton>
                      <ActionFavorite color="red" />
                    </IconButton>
                  <div>This recipe is a favorite!</div>
                  </Flexbox>
            }

          </div>
          {this.props.isauthenticated &&
            <Paper style={styles.commentBox} zDepth={3}>

                <Form model="comment" onSubmit={(comment) => this.props.actions.submitComment(comment, recipeid, userid, this.state.rating)}>

                  <label htmlFor="comment.comment">Share your experience when creating this recipe. Did you make any ingredient substitutions?</label>
                  <Control.text model="comment.comment" id="comment.comment" component={TextField} hintText="Write your review or comment here"  fullWidth={true} multiLine={true} rows={2} rowsMax={4}/>
                  <label htmlFor="comment.cooktime">How long did it take you to create this recipe?</label>
                  <Control type="number" model="comment.cooktime" id="comment.cooktime" hintText="Enter time in minutes" component={TextField} />
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      color2={'#DF2D4C'}
                      value={this.state.rating}
                      />
                    <label>And give it a rating!</label>
              <RaisedButton type="submit" label="Submit" fullWidth={true} />

                </Form>
            </Paper>
          }
        {totalcooktime.length<=0 &&


        <p>Login to be the first to rate and comment this recipe! </p>

        }

        {totalcooktime.length>=1 &&

<div>
<Flexbox style={styles.commentHeader}> Reviews ({totalcooktime.length})<div style={styles.stars}><ReactStars value={avgrating}  edit={false} size={20} color2={'#DF2D4C'}/></div></Flexbox>
<Paper style={styles.commentBox} zDepth={3}>
        {this.props.comments.map(function(object) {
            return (
                <span key={object.id}>
                  <List>
                    <ListItem
                          disabled={true}
                          leftAvatar={
                            <Avatar src={'https://s3.amazonaws.com/vcbc/avatars/'+object.user.img} />
                          }
                        >
                            <b> {object.user.username}</b>
                        </ListItem>

                </List>
                <p style={styles.comment}>{object.comment}<ReactStars value={object.rating} edit={false} size={15} color2={'#DF2D4C'}/></p>
              </span>
            );
          })}
            </Paper>
            </div>
            }
          </div>
        </div>
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
  infoBar: {
    width:'100%',
    height:100,
    backgroundColor:'rgb(243,243,243)',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  info: {
    borderLeft: 1,
    borderRight: 1,
    borderColor: 'red',
    borderWidth: '1px',
    textAlign: 'center',
    fontSize: '30px',
    marginTop: 35,
    color: 'rgb(223,97,45)'
  },
  gridTitle: {
    fontSize: '30px',
    marginTop: 15
  },
  container: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  infoLabel: {
    fontSize: '15px',
    marginTop: -15,
    color: 'rgb(200,200,200)'
  },
  commentHeader:{
    maxWidth: '1000px',
    fontSize: '30px',
    marginBottom: '10px',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  infoContainer: {
    flexWrap: 'wrap-reverse',
    width: '90%'
  },
  favePrompt: {
    alignItems: 'center',
    flexWrap: 'no-wrap'
  },
  commentBox: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: 25,
    marginBottom: 40
  },
  commentContainer: {
    margin: 'auto',
    maxWidth: '1000px',
    marginBottom: '10px',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
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
