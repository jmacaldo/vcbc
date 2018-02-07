import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './style.css';

class Login extends Component {

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <h1>VBCB Login</h1>
      </div>
    );
  }
}

export default Login;
