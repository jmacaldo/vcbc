import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import Nav from '../Nav'

class Register extends Component {
  handleSubmit(user) {
		this.props.actions.register(user);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Register', className)} {...props}>
        <Nav />
        <h1>VCBC New User Registration</h1>
        <Form model="userreg" onSubmit={(user) => this.handleSubmit(user)}>

          <label htmlFor="userreg.firstname">First Name</label>
          <Control.text model="userreg.firstname" id="userreg.firstname" />

          <label htmlFor="userreg.lastname">Last Name</label>
          <Control.text model="userreg.lastname" id="userreg.lastname" />

          <label htmlFor="userreg.username">Username</label>
          <Control.text model="userreg.username" id="userreg.username" />

          <label htmlFor="userreg.password">Password</label>
          <Control.text type="password" model="userreg.password" id="userreg.password" />

          <button type="submit">Submit!</button>
        </Form>

        {this.props.isregistered &&
          <p>You've succefully created an account! Click <Link to={`/`}>HERE</Link> to sign in!</p>
       }
      </div>
    );
  }
}

export default Register;
