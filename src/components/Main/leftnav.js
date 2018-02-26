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

export default class Nav extends Component {

  componentWillMount(){

  }

  render() {
    const { className, ...props } = this.props;

    return (
      <div>
        <h3 onClick={this.props.actions.loginbtn}>VCBC</h3>
        {this.props.isauthenticated &&
          <p> Welcome to VCBC, {this.props.user.firstname}! </p>
        }

        <List>
        {!this.props.isauthenticated &&
          <div>
          <ListItem onClick={this.props.actions.registerbtn} primaryText="Login" leftIcon={<ActionGrade />} />

          </div>
        }



          {this.props.isauthenticated &&
            <div>
              <ListItem onClick={this.props.actions.submitbtn} primaryText="Submit a recipe" leftIcon={<ContentCreate />} />
              <ListItem primaryText="Logout" leftIcon={<ContentDrafts />} />
            </div>
          }
        </List>
         <Divider inset={true} />
         <List>
            <ListItem onClick={this.props.actions.toolsbtn} primaryText="Recipe Tools" leftIcon={<ContentInbox />} />
         </List>

      </div>
    );
  }
}
