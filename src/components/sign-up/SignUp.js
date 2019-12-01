import React from "react";
import { connect } from 'react-redux'

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { signUpStart } from '../../redux/user/user.actions'
import "./SignUp.scss";
import { dispatch } from "rxjs/internal/observable/pairs";

class SignUp extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`password don't march`);
      return;
    }

    signUpStart({ displayName, email, password })
 
  };


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value})
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="signn-up">
        <h2 className="title"> I do not have a account </h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          ></FormInput>

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirm Password"
            required
          ></FormInput>
          <CustomButton type="submit"> SIGN UP </CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
