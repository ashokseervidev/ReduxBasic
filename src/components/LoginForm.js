import React, { Component } from "react";
import { connect } from "react-redux";
import { emailChanged, passwordChanged } from "../actions"
import { Card, CardSection, Input, Button } from "./common";

class LoginForm extends Component<{}> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onPasswordChange = (text) => {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Email" placeholder="email@email.com" onChangeText={this.onEmailChange} value={this.props.value}/>
        </CardSection>
        <CardSection>
          <Input secureTextEntry label="Password" placeholder="password" onChangeText={this.onPasswordChange} value={this.props.password} />
        </CardSection>
        <CardSection>
          <Button>login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);