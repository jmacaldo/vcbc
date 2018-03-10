import {List, ListItem} from 'material-ui/List';
import React, {Component} from 'react';
import classnames from 'classnames';
import Chip from 'material-ui/Chip';
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
import edamamdata from './edamamdata.js'
import bgr from './bgr.png'
import cow from './cow01.jpg'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Toggle from 'material-ui/Toggle';
import { Link } from 'react-router-dom';



export default class ApiRecipe extends Component {


  state = {
    rating: '',
    edamam: [],
   fixedHeader: false,
   fixedFooter: false,
   stripedRows: false,
   showRowHover: false,
   selectable: false,
   multiSelectable: false,
   enableSelectAll: false,
   deselectOnClickaway: true,
   showCheckboxes: false,
   height: '500px',
 };

  handleSubmitComment(comment){
    console.log(comment);
    this.props.actions.submitCommentEdamam(comment)
  }


  componentWillMount(){
    document.body.style.backgroundColor = "rgb(247,247,247)";
    let uri = 'http://www.edamam.com/ontologies/edamam.owl%23'+ this.props.match.params.uri
    console.log(uri);
    this.props.actions.edamamurisearch(uri)
    this.props.actions.findedamamcomments(this.props.match.params.uri)
  }

  render() {
    const { className, ...props } = this.props;

    //push recipe tags to an array

    let tagsarr = [];
    let arr = this.props.edamamfocus.healthLabels

    if (arr) {
        for(let i = 0; i <= (arr.length-1); i++) {
          tagsarr.push(<div style={styles.wrapper} key={i}><Chip style={styles.chip}>
                 {arr[i]}
            </Chip></div>);
        }
    }

    //health label array

    let ingredientarr =[]
    let ingredients = this.props.edamamfocus.ingredientLines

    if (ingredients) {
        for(let j = 0; j <= (ingredients.length-1); j++) {
          ingredientarr.push(  <ListItem key={j} style={styles.listobj}>
                 {ingredients[j]}
          </ListItem>);
        }
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

let recipeid = this.props.edamamfocus.uri;
let userid = this.props.user.id;

const ratingChanged = (newRating) => {
  this.setState({rating: newRating})
console.log(newRating)
console.log(this.state.rating);
}


return (
  <div style={styles.main}>

    <div style={styles.nav}><Nav /></div>

      <div style={styles.root}>
        <GridList cols={1} cellHeight='300'>
            <GridTile
              key={this.props.edamamfocus.uri}
              title={this.props.edamamfocus.label}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="right"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              titleStyle={this.props.edamamfocus.label}
            >
              <img src={cow} />
            </GridTile>
          </GridList>
          <Flexbox style={styles.infoBar}>

          </Flexbox>

          <Flexbox style={styles.infoBarOverlay}>
            <div style={styles.info}>
              {this.props.edamamfocus.source} <div style={styles.infoLabel}><p><i>Source</i></p></div>
            </div>
            <div style={styles.info}>
              {this.props.edamamfocus.yield} <div style={styles.infoLabel}><p><i>Yield</i></p></div>
            </div>
            <div style={styles.info}>
              {Math.floor(this.props.edamamfocus.calories)} <div style={styles.infoLabel}><p><i>Calories</i></p></div>
            </div>
          </Flexbox>


    <div style={styles.commentContainer}>
      {avedom()}
        <div style={styles.wrapper}>
          {tagsarr}
          </div>

          <Flexbox style={styles.nutrition}>
              <div style={styles.commentHeader}>
                Ingredients
                <Paper style={styles.ingredientsPaper} zDepth={3}>
                  <List>
                    {ingredientarr}
                  </List>
                  <RaisedButton label="CREATE THIS RECIPE" fullWidth={true} onClick={this.props.actions.goToExternal(this.props.edamamfocus.url)} />
                  <div id="edamam-badge" data-color="transparent"></div>
                </Paper>
              </div>

              <div style={styles.nutritionDiv} >
                Nutrition
                <Paper style={styles.tablepaper} zDepth={3}>
                  <Table
          height={this.state.height}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          style={styles.table}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>

            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Nutrient"></TableHeaderColumn>
              <TableHeaderColumn tooltip="Amount">Amount</TableHeaderColumn>
              <TableHeaderColumn tooltip="Daily Value">Daily Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {edamamdata[24].recipe.digest.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn><b>{row.label}</b></TableRowColumn>
                <TableRowColumn>{Math.floor(row.total)} {row.unit}</TableRowColumn>
                <TableRowColumn>{Math.floor(row.daily)} %</TableRowColumn>
              </TableRow>
            ))}x
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >

          </TableFooter>
        </Table>
                </Paper>
              </div>
          </Flexbox>

          {totalcooktime.length<=0 &&


          <p>Be the first to rate and comment this recipe! </p>

          }
      {this.props.isauthenticated &&
        <Paper style={styles.commentBox} zDepth={3}>

            <Form model="comment" onSubmit={(comment) => this.props.actions.submitCommentEdamam(comment, this.props.match.params.uri, userid, this.state.rating)}>

              <label htmlFor="comment.comment">Share your experience when creating this recipe. Did you make any ingredient substitutions?</label>
              <Control.text model="comment.comment" id="comment.comment" component={TextField} hintText="Write your review or comment here"  fullWidth={true} multiLine={true} rows={2} rowsMax={4}/>
              <label htmlFor="comment.cooktime">How long did it take you to create this recipe?</label>
              <Control type="number" model="comment.cooktime" id="comment.cooktime" hintText="Enter time in minutes" component={TextField} />
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={'#DF2D4C'}
                  value={this.state.rating} />
                <label>And give it a rating!</label>
          <RaisedButton type="submit" label="Submit" fullWidth={true} />

            </Form>
        </Paper>
      }


    {totalcooktime.length>=1 &&

      <div>
        <Flexbox style={styles.commentHeader}> Reviews ({totalcooktime.length})<div style={styles.stars}><ReactStars value={avgrating} edit={false} size={20} color2={'#DF2D4C'}/></div></Flexbox>
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
      <GridList cols={1} cellHeight='200'>
          <GridTile
            key={this.props.edamamfocus.uri}
          >
            <img src={bgr} />
          </GridTile>
        </GridList>
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
  listobj: {
    marginBottom: '-15px'
  },
  nav: {
    width: '80%',
    margin: 'auto',
    alignItems: 'center',
    marginTop: 10,
  },
  infoBar: {
    width:'100%',
    height:300,
    backgroundColor:'black',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    opacity: .5,
    marginTop: -300,
    zIndex: 0
  },
  infoBarOverlay: {
    width:'100%',
    height:300,
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: -300,
    position: 'absolute',
    zIndex: 3
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
  infoLabel: {
    fontSize: '15px',
    marginTop: -15,
    color: 'rgb(200,200,200)'
  },
  commentHeader:{
    fontSize: '20px',
    marginBottom: '10px',
    marginTop: '20px',
    width: '45%',
    minWidth: '40%'
  },
  ingredientsPaper: {
    fontSize: '15px',
  },
  nutritionDiv: {
    marginTop: '20px',
    width: '45%',
    minWidth: '40%'
  },
  tablepaper: {
    width: '100%'
  },
  table: {
    width: '100%'
  },
  nutrition: {
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    position: 'relative'
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
  commentContainer: {
    width: '70%',
    margin: 'auto',
    marginTop: '20px'
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  propContainer: {
    width: 200,
    overflow: 'hidden'
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
  stars: {
    marginLeft: '15px'
  },
  main: {
    margin: 'auto'
  },
  root: {
    margin: 'auto',
    width: '100vw',

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
