import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { Control, Form, actions } from 'react-redux-form';
import './style.css';
import Nav from '../Nav'
import ReactS3Uploader from 'react-s3-uploader';

import Logo from './transLogo.png'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//this function generates a random background each time page is refreshed
// let i = Math.floor((Math.random() * 3) + 1);
// console.log(i);
//
import Farm from './farm2.jpg'
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';



class Register extends Component {
  constructor(props) {
    super(props)
    this.state = { errorText: '', value: props.value }
  }

  handleSubmit(user) {
		this.props.actions.register(user);
  }

  validate(e, newvalue){
    console.log('validate fired');
  }

  onChange(e) {
   this.props.actions.userValidate(e.target.value)
 }

  componentWillMount(){
     document.body.style.backgroundImage = `url('${Farm} ')`;
     document.body.style.backgroundRepeat = 'no-repeat';
     document.body.style.backgroundSize = 'cover';
     document.body.style.backgroundAttachment = 'fixed';
   }




onUploadFinish=(file)=>{
  this.props.actions.avatarimg(file.filename.split('/')[1])
}


  render() {
    const { className, ...props } = this.props;
    return (
      <div>
        <div style={styles.maindiv}>


        <img style={styles.logo} src={Logo}></img>
        <Form model="userreg" onSubmit={(user) => this.handleSubmit(user)}>
          <label>Profile Image</label>
          <ReactS3Uploader
          signingUrl="/s3/sign"
          signingUrlMethod="GET"
          s3path="avatars/"
          onFinish={this.onUploadFinish}
          />

          <label htmlFor="userreg.firstname">First Name</label>
            <Control.text fullWidth={true} inputStyle={styles.form} component={TextField}  multiLine={false} model="userreg.firstname" id="userreg.firstname" />
          <label htmlFor="userreg.lastname">Last Name</label>
          <Control.text inputStyle={styles.form} fullWidth={true} component={TextField}  multiLine={false} model="userreg.lastname" id="userreg.lastname" />

          <label htmlFor="userreg.username">Username</label>
          <Control.text inputStyle={styles.form} errorText={this.props.usererror ? "Username is already taken" : "" } onChange={this.onChange.bind(this)} fullWidth={true} component={TextField}  multiLine={false} model="userreg.username" id="userreg.username" />

          <label htmlFor="userreg.password">Password</label>
          <Control.text inputStyle={styles.form} fullWidth={true} component={TextField}  multiLine={false} type="password" model="userreg.password" id="userreg.password" />
          <label></label>
          <RaisedButton type="submit" label="Submit" fullWidth={false} />
        </Form>

        {this.props.isregistered &&
          <p>You've succefully created an account! Click <Link to={`/`}>HERE</Link> to sign in!</p>
       }
       </div>
      </div>
    );
  }
}

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
    formHint: '#808080'
  },
  logo: {
    display: 'block',
    margin: 'auto'
  }
}

export default Register;
