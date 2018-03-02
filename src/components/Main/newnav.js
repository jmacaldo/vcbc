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
import logo from './vcbc_logo_trans.png'
import Flexbox from 'flexbox-react';

export default class Newnav extends Component {

  componentWillMount(){

  }

  render() {
    const { className, ...props } = this.props;

    return (
      <Flexbox style={styles.flex}>
          <img style={styles.logo} src={logo} />
          <p>Search goes here</p>
          <p>User icon goes here</p>

      </Flexbox>
    );
  }
}

const styles ={
  nav: {

  },
  logo: {
    height: 90
  },
  flex: {
    width:'100vw',
    flexDirection: 'row',
    backgroundColor: 'white',
    maxHeight: 80,
    alignItems: 'center',
    marginTop: 0,
    padding: 10,
    paddingBottom: 10
  }
}
