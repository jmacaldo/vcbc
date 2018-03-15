import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import React, {Component} from 'react';
import classnames from 'classnames';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import edamamdata from './edamamdata.js'
import { Link } from 'react-router-dom';
import featured from './featureLR.png'

export default class Grid extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount(){
    document.body.style.backgroundColor = "rgb(247,247,247)";

    window.addEventListener('load', this.props.actions.allrecipes);
    // window.addEventListener('load', this.props.actions.edamam(''));


  }

  handleDetail(tile) {
     this.props.actions.detail(tile);
     this.props.actions.findcommentsbyrecipe(tile);
  }
  clickHandler(id){
    console.log('this is a test', id);
    window.location = `/recipe/`+id;
    return false
  }

  handleEdamam(tile) {
    this.props.actions.edamamfocus(tile.recipe);
    this.props.actions.findedamamcomments(tile.recipe.uri);
  }

  render() {
    const { className, ...props } = this.props;


    let data = this.props.allrecipes


    return (
      <div style={styles.root}>
        <GridList
          cols={3}
          cellHeight={300}
          padding={20}
          style={styles.gridList}
        >
          {data.map((tile) => (
          <GridTile
              key={tile.id}
              title={tile.title}
              titlePosition="bottom"
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 1 : 1}
              actionIcon={tile.featured ? <img style={styles.ribbon} src={featured}></img> : ""}
              onClick={()=>this.clickHandler(tile.id)}
            >
              <img style={styles.gridImg} src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.img} />
            </GridTile>
          ))}
        </GridList>
      </div>

    );
  }
}


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '80%',
    margin: 'auto'
  },
  ribbon: {
    marginTop: -60
  },
  gridImg: {
    opacity: 1
  },
  gridList: {
    maxWidth: '100vw',
    overflowY: 'auto',
  },
};
