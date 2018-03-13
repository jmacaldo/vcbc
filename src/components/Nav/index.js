import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentCreate from 'material-ui/svg-icons/content/create';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
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

  componentWillMount(){
    window.addEventListener('load', this.props.actions.allrecipes);
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
      <Flexbox style={styles.flex}>
        <Link to={`/`}><img style={styles.logo} src={logo} /></Link>

        <div style={styles.search}>
          <Search />
        </div>

          {!this.props.isauthenticated &&
            <Flexbox onClick={this.handleOpen} id={styles.avatartop}><Avatar size={60} src={'https://s3.amazonaws.com/vcbc/avatars/defaultavatar.png'} /><div style={styles.username}>Login! </div></Flexbox>

          }

          {this.props.isauthenticated &&
          <Flexbox onClick={this.handleClick} id={styles.avatartop}><Avatar size={60} src={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.user.img} /><div style={styles.username}>{this.props.user.firstname}! </div></Flexbox>
          }

      </Flexbox>

      <Popover
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        onRequestClose={this.handleRequestClose}
        >
        <Menu>
          {!this.props.isauthenticated &&
            <div>
              <MenuItem onClick={this.props.actions.loginbtn} primaryText="Main" leftIcon={<ContentCreate />} />
              <MenuItem onClick={this.handleOpen} primaryText="Login" leftIcon={<ActionGrade />} />
            </div>
          }
          {this.props.isauthenticated &&
            <div>
              <Link to={`/profile/${this.props.user.username}`}><MenuItem onClick={this.props.actions.submitbtn} primaryText="My profile" leftIcon={<AccountIcon />} /></Link>
              <MenuItem onClick={this.props.actions.submitbtn} primaryText="Submit a recipe" leftIcon={<ContentCreate />} />
              <MenuItem primaryText="Logout" onClick={this.props.actions.logoutUser} leftIcon={<ContentDrafts />} />
            </div>
          }
        </Menu>
    </Popover>





      <Dialog
         modal={false}
         open={this.state.diag}
         onRequestClose={this.handleClose}
         contentStyle={styles.diag}

       >
        <Flexbox style={styles.login}>
                <img src={leftimg} style={styles.left}   />
               <div style={styles.right}>
                   {!this.props.isauthenticated &&
                     <div>
                  <label>Existing users sign in here</label>
                  <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>
                    <label htmlFor="userlogin.username"></label>
                    <Control.text component={TextField} hintText="Username" multiLine={false} model="userlogin.username" id="userlogin.username"  />
                    <label htmlFor="userlogin.password"></label>
                    <Control.text component={TextField} hintText="Password" multiLine={false} type="password" model="userlogin.password" id="userlogin.password"  />
                    <label></label>
                  <RaisedButton type="submit" label="Submit" fullWidth={false} />
                  </Form>


                    <h5><i>Don't have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</i></h5>
                    </div>
                  }

                  {this.props.isregistered &&
                    <div>
                    <h1 style={styles.moo}>Moo!</h1><p>Horray! You've signed in! Click outside this box to continue</p>
                    </div>
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
    height: 100,
    paddingRight: '30px'
  },
  menu: {
    paddingLeft: '30px'
  },
  flex: {
    width:'80vw',
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingBottom: 20,
  },
  username: {
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 20,
    marginRight: '30px'
  },
  loginRight:{
    paddingLeft: 40
  },
  moo: {
    fontSize: '50px'
  },
  avatartop: {
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingLeft: '30px'
  },
  left: {
    padding: 0,
    marginLeft: -50,
    marginBottom: -25
  },
  search: {
     width:'90%',
    marginBottom:18,

  },
  login:{
    padding:  0,
    margin: 0,
    flexWrap: 'wrap'
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
    width: '930px',
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
