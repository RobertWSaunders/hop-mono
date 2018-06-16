import React, { Component } from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import LoginForm from './forms/LoginForm';
import FacebookButton from './utils/FacebookButton';

class Login extends Component {

	handleLoginFormSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<div>
				<div>
					<FacebookButton title="Login with Facebook" />
				</div>
				<div>
					<LoginForm onFormSubmit={this.handleLoginFormSubmit.bind(this)} />
				</div>
			</div>
		);
	}
}

export default Login;
