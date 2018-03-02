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

export default class Focus extends Component {

  handleSubmitComment(comment){
    console.log(comment);
    this.props.actions.submitComment(comment)
  }




  render() {
    const { className, ...props } = this.props;
    //array for Tags
    let tagsarr = [];
    let arr = this.props.recipeFocus.tags

    for(let i = 0; i <= (arr.split(',').length-1); i++) {
      tagsarr.push(<div style={styles.wrapper} key={i}><Chip style={styles.chip}>
             {arr.split(',')[i]}
        </Chip></div>);
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
    return(
      <p>there are no comments</p>
    )
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


    let recipeid = this.props.recipeFocus.id;
    let userid = this.props.user.id;

    const ratingChanged = (newRating) => {
  console.log(newRating)
}



    return (
      <div style={styles.main}>
          <div style={styles.root}>
            <GridList cols={1} cellHeight='400'>
                <GridTile
                  key={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.recipeFocus.img}
                  title={this.props.recipeFocus.title}
                  actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  actionPosition="right"
                  titlePosition="bottom"
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img src={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.recipeFocus.img} />
                </GridTile>
              </GridList>
              <List>
                <ListItem disabled={true} leftAvatar={<Avatar src={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.recipeFocus.user.img} />}>
                  {this.props.recipeFocus.user.username}
                </ListItem>
              </List>
          </div>

          <CardHeader title={this.props.recipeFocus.user.username} subtitle="Subtitle" avatar={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.recipeFocus.user.img}  />
          <Card style={divStyle}>
            <CardMedia overlay={<CardTitle title={this.props.recipeFocus.title} subtitle={this.props.recipeFocus.description} />}>
              <img src={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.recipeFocus.img} alt="" />
            </CardMedia>
            <CardText>
              <p>Source: {this.props.recipeFocus.source} </p>
              <p>Yield: {this.props.recipeFocus.yield} </p>
              <p>Cook time: {this.props.recipeFocus.cooktime} </p>
              {avedom()}
                <div style={styles.wrapper}>
                  {tagsarr}
                  </div>
                    <h2> Reviews ({totalcooktime.length})</h2>
                    <ReactStars value={3.5} edit={false} size={24}/>

                  {this.props.isauthenticated &&
                    <Paper style={styles.paper} zDepth={3}>



                        <Form model="comment" onSubmit={(comment) => this.props.actions.submitComment(comment, recipeid, userid)}>

                          <label htmlFor="comment.comment">Share your experience when creating this recipe. Did you make any ingredient substitutions?</label>
                          <Control.text model="comment.comment" id="comment.comment" component={TextField} hintText="Write your review or comment here"  multiLine={true} rows={2} rowsMax={4}/>

                          <label htmlFor="comment.cooktime">How long did it take you to create this recipe?</label>
                          <Control type="number" model="comment.cooktime" id="comment.cooktime" hintText="Enter value in minutes" component={TextField} />
                            <ReactStars
                              count={5}
                              onChange={ratingChanged}
                              size={24}
                              color2={'#ffd700'} />
                            <label>And give it a rating!</label>
                      <RaisedButton type="submit" label="Submit" fullWidth={true} />

                        </Form>
                    </Paper>
                  }

                  {this.props.comments.map(function(object) {
                    return (
                      <Paper key={object.id} style={styles.paper} zDepth={3}>
                        <span>
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
                        <p style={styles.comment}>{object.comment}</p>
                        <i style={styles.cooktime}>{object.user.username} took {object.cooktime} minutes to make this recipe.</i>



                      </span>
                      </Paper>
                    );
                  })}
            </CardText>


          </Card>
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
    marginBottom: 5
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
