// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Nav extends Component {
  render() {


    const pages = ['/', 'main', 'submit', 'register'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return (
      <div>
        <span>Welcome, {this.props.name}!</span>
        <span><nav>{navLinks}</nav></span>
      </div>



);
  }
}
