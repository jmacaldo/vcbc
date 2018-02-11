import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import PropTypes from 'prop-types';

class Login extends Component {
  handleSubmit(user) {
		this.props.actions.login(user);
  }

  render() {

    const { className, ...props } = this.props;
    console.log('this is a test', this.props);
    return (

      <div className={classnames('App', className)} {...props}>
          <h1>VCBC Login</h1>
          <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>

            <label htmlFor="userlogin.username">Username</label>
            <Control.text model="userlogin.username" id="userlogin.username" />

            <label htmlFor="userlogin.password">Password</label>
            <Control.text type="password" model="userlogin.password" id="userlogin.password" />

            <button type="submit">Submit!</button>
          </Form>

          {!this.props.isauthenticated &&
            <p>Dont have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</p>
          }

          {this.props.isauthenticated &&
  					<p> Welcome to VCBC, {this.props.user.firstname}!  Click <Link to={`/main`}>HERE</Link> to go to the main page</p>
  			 	}


      </div>
    );
  }
}

Login.propTypes = {
  isauthenticated: PropTypes.bool
};

export default Login;
