import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';

class Login extends Component {
  handleSubmit(user) {
		this.props.actions.login(user);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <h1>VCBC Login</h1>
        <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>

          <label htmlFor="userlogin.username">Username</label>
          <Control.text model="userlogin.username" id="userlogin.username" />

          <label htmlFor="userlogin.password">Password</label>
          <Control.text type="password" model="userlogin.password" id="userlogin.password" />

          <button type="submit">Submit!</button>

          <p>Don't have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</p>
        </Form>
      </div>
    );
  }
}

export default Login;
