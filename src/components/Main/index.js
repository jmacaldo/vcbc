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
          <h1>This is the main page</h1>

          {this.props.isauthenticated &&
  					<h3> Welcome to VCBC, {this.props.user.firstname}! </h3>
  			 	}


      </div>
    );
  }
}

Login.propTypes = {
  isauthenticated: PropTypes.bool
};

export default Login;
