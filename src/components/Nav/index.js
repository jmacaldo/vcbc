import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentCreate from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import React, {Component} from 'react';
import classnames from 'classnames';
import logo from './vcbc_logo_trans.png'
import Flexbox from 'flexbox-react';
import Search from '../../containers/SearchContainer';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MenuIcon from './menu.png';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { Control, Form, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import cow from './cow.jpg';
import leftimg from './cow.png';
import {GridList, GridTile} from 'material-ui/GridList';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';


export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      diag: false,
      value:''
    };
  }
  handleSubmit(user) {
    this.props.actions.login(user);
  }

handleClick = (event) => {
// This prevents ghost click.
event.preventDefault();



this.setState({
  open: true,
  anchorEl: event.currentTarget,
});
};

getValidationState() {
   const length = this.state.value.length;
   if (length > 10) return 'success';
   else if (length > 5) return 'warning';
   else if (length > 0) return 'error';
   return null;
 }

handleOpen = () => {
  this.setState({diag: true});
};

handleClose = () => {
   this.setState({diag: false});
 };


handleRequestClose = () => {
this.setState({
  open: false,
});
};

  render() {
    const { className, ...props } = this.props;
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
      <Paper rounded={true} style={styles.paper}>
      <Flexbox style={styles.flex}>
          <img onClick={this.handleClick} style={styles.logo} src={logo} />
            <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'middle', vertical: 'top'}}
            onRequestClose={this.handleRequestClose}
          >
            <Menu>
              {!this.props.isauthenticated &&
                <div>
                  <MenuItem onClick={this.handleOpen} primaryText="Login" leftIcon={<ActionGrade />} />
                </div>
              }
              {this.props.isauthenticated &&
                <div>
                  <MenuItem onClick={this.props.actions.submitbtn} primaryText="Submit a recipe" leftIcon={<ContentCreate />} />
                  <MenuItem primaryText="Logout" leftIcon={<ContentDrafts />} />
                </div>
              }
              <Divider inset={true} />
              <MenuItem onClick={this.props.actions.toolsbtn} primaryText="Recipe Tools" leftIcon={<ContentInbox />} />
            </Menu>
          </Popover>
          <div style={styles.search}>
            <Search />
          </div>

          {this.props.isauthenticated &&
          <span id={styles.avatartop}><Avatar size={60} src={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.user.img} /><div style={styles.username}>Hi, {this.props.user.firstname}! </div></span>
          }

      </Flexbox>





      </Paper>
      <Dialog
         modal={false}
         open={this.state.diag}
         onRequestClose={this.handleClose}
         contentStyle={styles.diag}

       >
        <Flexbox style={styles.login}>
                <img src={leftimg} style={styles.left}   />
               <div style={styles.right}>
                  <label>Existing users sign in here</label>
                  <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>
                    <label htmlFor="userlogin.username"></label>
                    <Control.text component={TextField} hintText="Username" multiLine={false} model="userlogin.username" id="userlogin.username"  />
                    <label htmlFor="userlogin.password"></label>
                    <Control.text component={TextField} hintText="Password" multiLine={false} type="password" model="userlogin.password" id="userlogin.password"  />
                    <label></label>
                  <RaisedButton type="submit" label="Submit" fullWidth={false} />
                  </Form>

                  {!this.props.isauthenticated &&
                    <h5><i>Don't have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</i></h5>
                  }

                  {this.props.isregistered &&
                    <p>You've succefully created an account! Click <Link to={`/`}>HERE</Link> to sign in!</p>
                 }
               </div>


      </Flexbox>
      </Dialog>

      </div>
    );
  }
}

const styles ={

  logo: {
    height: 100
  },
  flex: {
    width:'100vw',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingBottom: 20,


  },
  loginRight:{
    paddingLeft: 40
  },
  left: {
    padding: 0,
    marginLeft: -50,
    marginBottom: -25
  },
  search: {
    width:'80vw',
    marginBottom:18
  },
  login:{
    padding:  0,
    margin: 0,
    flexWrap: 'wrap'
  },
  username: {
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 30
  },
  loginImg: {
    width: '100%',
    padding: 50
  },
  right: {
    marginTop: 70,
    marginLeft: 25
  },
  diag: {
    width: '60%',
    height: '50%',
    maxWidth: 'none',
    maxHeight: 'none',
    padding: 0


  }
}

const paper = {
  padding: 30,
  paddingTop: 10,
  marginLeft: 40,
  marginTop: 20
}
