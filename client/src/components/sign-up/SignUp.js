import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';

import { signUpStart } from '../../redux/user/user.actions';
import './SignUp.scss';
import { dispatch } from 'rxjs/internal/observable/pairs';



const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert(`password don't march`);
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({...userCredentials, [name]: value });
  };

 
  return (
    <div className="signn-up">
      <h2 className="title"> I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        ></FormInput>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        ></FormInput>

        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="confirm Password"
          required
        ></FormInput>
        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
