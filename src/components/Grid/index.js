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

export default class Grid extends Component {

  handleDetail(tile) {
    console.log(tile);
     this.props.actions.detail(tile);
     this.props.actions.findcommentsbyrecipe(tile);
  }

  render() {
    const { className, ...props } = this.props;

    let data = this.props.allrecipes

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight={400}
          padding={1}
          style={styles.gridList}
        >
          {data.map((tile) => (
            <GridTile
              key={tile.id}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="bottom"
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 1 : 1}
              onClick={() => this.handleDetail(tile)}
            >
              <img src={'https://s3.amazonaws.com/vcbc/recipes/'+tile.img} />
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
  },
  gridList: {
    maxWidth: '100vw',
    overflowY: 'auto',
  },
};
