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
import { Link } from 'react-router-dom';
import Bsnav from '../../containers/BsNavContainer';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  componentWillMount(){
    this.props.actions.edamam(this.props.match.params.query)
  }

  handleDetail(tile) {
     this.props.actions.detail(tile);
     this.props.actions.findcommentsbyrecipe(tile);
  }
  clickHandler(e,id){
    e.preventDefault();
    console.log('this is a test', id);
    window.location = `/recipe/`+id;
  }

  handleEdamam(tile) {
    this.props.actions.edamamfocus(tile.recipe);
    this.props.actions.findedamamcomments(tile.recipe.uri);
  }

  render() {
    const { className, ...props } = this.props;
    console.log(this.props);


    return (
      <div >
        <Bsnav />
      <h3 style={styles.header}>Showing search results for: {this.props.match.params.query} </h3>
      <div style={styles.grid}>
        <GridList
          cols={4}
          cellHeight={200}
          padding={20}
          style={styles.gridList}
        >
          {this.props.edamam.map((tile) => (
              <Link to={`/api/${tile.recipe.uri.split("#")[1]}`}><GridTile
              key={tile.recipe.uri}
              title={tile.recipe.label}
              actionPosition="left"
              titlePosition="bottom"
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 1 : 1}
            >
              <img src={tile.recipe.image} />
            </GridTile></Link>
          ))}

        </GridList>
        </div>
      </div>
    );
  }
}


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  grid: {
    width: '80%',
    margin: 'auto'
  },
  header: {
    marginTop: 60,
    display: 'block',
    marginLeft: '35%'
  },
  gridImg: {
    opacity: 1
  },
  gridList: {
    maxWidth: '100vw',
    overflowY: 'auto',
  },
};
