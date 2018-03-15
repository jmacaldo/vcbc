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
import Logo from '../Register/transLogo.png'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

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

  componentWillUnmount(){
    document.body.style.backgroundColor = "rgb(247,247,247)";
  }

  render() {

    const { className, ...props } = this.props;
    console.log('this is a test', this.props);


    return (

      <div className={classnames('App', className)} {...props}>
        <div style={styles.maindiv}>


        <img style={styles.logo} src={Logo}></img>

        <label>Existing users sign in here</label>
        <Form model="userlogin" onSubmit={(user) => this.handleSubmit(user)}>
          <label htmlFor="userlogin.username"></label>
          <Control.text defaultValue={''} component={TextField} inputStyle={styles.form} fullWidth={true}  multiLine={false} model="userlogin.username" id="userlogin.username"  />
          <label htmlFor="userlogin.password"></label>
          <Control.text defaultValue={''} component={TextField} inputStyle={styles.form} fullWidth={true}  multiLine={false} type="password" model="userlogin.password" id="userlogin.password"  />
          <label></label>
        <RaisedButton type="submit" label="Submit" fullWidth={false} />
        </Form>

        {!this.props.isregistered &&
          <h5><i>Don't have an account? Click <Link to={`/register`}>HERE</Link> to register for one!</i></h5>
       }

       {this.props.isauthenticated &&
           <h5><i>Login succesful! Click <a href={'/'}>HERE </a> to continue!</i></h5>

      }


          </div>
      </div>
    );
  }
}

Login.propTypes = {
  isauthenticated: PropTypes.bool
};

const styles = {
  maindiv: {
    width: 400,
    margin: 'auto',
    padding: 20,
    marginTop: 100,
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    color: '#fff'
  },
  form: {
    color: 'white',
    formHint: 'white'
  },
  logo: {
    display: 'block',
    margin: 'auto'
  }
}


export default Login;
