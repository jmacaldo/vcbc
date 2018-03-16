import React, {Component} from 'react';
import classnames from 'classnames';
import Flexbox from 'flexbox-react';
import Search from '../../containers/SearchContainer';
import { Control, Form, actions } from 'react-redux-form';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import { Jumbotron, FormGroup, Button,Glyphicon, FormControl, Navbar, NavItem, MenuItem, NavDropdown, Nav } from 'react-bootstrap';


export default class NoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);

    this.state = {
      value: ''
    };
 }





  searchHandle(e){
    console.log('search fired');
     window.location = `/search/`+e.target.value;

  }

  handleChange(e) {
      this.setState({ value: e.target.value });
      console.log(e.target.value);
    }
  searchClick(){
      window.location = `/search/`+this.state.value;
  }


  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <Navbar fixedTop collapseOnSelect>
        <Navbar.Header>
        <Navbar.Brand>
        <a href="/">Vegan Cook Book Club</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
        </Nav>
        {this.props.isauthenticated &&
          <Nav pullRight>
          <NavDropdown eventKey={3} title={this.props.user.username} id="basic-nav-dropdown">
        <MenuItem eventKey={3.1} href={`/profile/${this.props.user.username}`}>My Profile <Avatar size={30} src={'https://s3.amazonaws.com/vcbc/avatars/'+this.props.user.img} /></MenuItem>
        <MenuItem eventKey={3.2} href={`/submit`}>Submit a recipe</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3} onClick={this.props.actions.logoutUser}>Logout</MenuItem>
      </NavDropdown>
      </Nav>

        }
        {!this.props.isauthenticated &&
        <Nav pullRight>
          <NavItem eventKey={1} href={`/login`}>
            Login
          </NavItem>
        </Nav>
        }
        </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const styles ={
  avatar: {
    padding: 0,
    marginTop: 0,
    marginBottom: 0
  }

}
