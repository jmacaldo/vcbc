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

export default class Focus extends Component {

  handleSubmitComment(comment){
    console.log(comment);
    this.props.actions.submitComment(comment)
  }




  render() {
    const { className, ...props } = this.props;
    //array for Tags
    let tagsarr = [];
    let arr = this.props.data.tags

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


    let recipeid = this.props.data.id;
    let userid = this.props.user.id;



    return (
      <div>
          <CardHeader title={this.props.data.user.username} subtitle="Subtitle" avatar={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.data.user.img}  />
          <Card style={divStyle}>
            <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.description} />}>
              <img src={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.data.img} alt="" />
            </CardMedia>
            <CardText>
              <p>Source: {this.props.data.source} </p>
              <p>Yield: {this.props.data.yield} </p>
              <p>Cook time: {this.props.data.cooktime} </p>
              {avedom()}
                <div style={styles.wrapper}>
                  {tagsarr}
                  </div>
                  {this.props.auth &&

                    <div>
                      <p> create a comment </p>
                        <Form model="comment" onSubmit={(comment) => this.props.actions.submitComment(comment, recipeid, userid)}>

                          <label htmlFor="comment.comment">Share your experience when creating this recipe. Did you make any ingredient substitutions?</label>
                          <Control.text model="comment.comment" id="comment.comment" />

                          <label htmlFor="comment.cooktime">How long did it take you to create this recipe?</label>
                          <Control type="number" model="comment.cooktime" id="comment.cooktime" />


                          <button type="submit">Submit!</button>
                        </Form>
                    </div>




                  }

                  {this.props.comments.map(function(object) {
                    return (
                      <div key={object.id}>
                        <span>{object.user.username} - {object.comment} - cooktime: {object.cooktime} minutes </span>
                      </div>
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
};
