import {List, ListItem} from 'material-ui/List';
import React, {Component} from 'react';
import classnames from 'classnames';
import Chip from 'material-ui/Chip';
import Search from './search'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

export default class Focus extends Component {

  componentWillMount(){




  }

  render() {
    const { className, ...props } = this.props;
    //array for Tags
    let tagsarr = [];
    let arr = this.props.data.tags
    console.log(arr.split(','));

    for(let i = 0; i <= (arr.split(',').length-1); i++) {
      tagsarr.push(<div style={styles.wrapper}><Chip style={styles.chip}>
             {arr.split(',')[i]}
        </Chip></div>);
    }

    return (
      <div>
        <Paper style={paper} zDepth={3} rounded={true} >
          <Card style={divStyle}>
            <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.description} />}>
              <img src={'https://s3.amazonaws.com/vcbc/recipes/'+this.props.data.img} alt="" />
            </CardMedia>
            <CardText>
              <p>Source: {this.props.data.source} </p>
              <p>Yield: {this.props.data.yield} </p>
              <p>Cook time: {this.props.data.cooktime} </p>
            </CardText>
          <div style={styles.wrapper}>
            {tagsarr}
            </div>
          </Card>
        </Paper>
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
    marginBottom: 5,
    marginLeft: 6
  },
};
