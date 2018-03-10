import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import PropTypes from 'prop-types';
import CowLogin from './cow01.jpg'
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
  handleSubmit(user) {
		this.props.actions.login(user);
  }

  componentWillMount(){
    document.body.style.backgroundImage = `url('${CowLogin} ')`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
  }

  render() {

    const { className, ...props } = this.props;
    console.log('this is a test', this.props);
    return (

      <div className={classnames('App', className)} {...props}>

        <div style={styles.login}>
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
      </div>
    );
  }
}

Login.propTypes = {
  isauthenticated: PropTypes.bool
};

const styles = {
  login: {
    marginTop: '20%',
    marginLeft: '60%'
  }
}

export default Login;
