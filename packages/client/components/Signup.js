import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import SingupForm from "./forms/SignupForm";
import FacebookButton from "./utils/FacebookButton";

const CREATE_USER = gql`
	mutation createUser($firstname: String!, $lastname: String!) {
		createUser(firstname: $firstname, lastname: $lastname) {
			firstname,
			lastname
		}
	}
`;

class Signup extends Component {
	handleSignupFormSubmit(formValues) {

		const { firstName, lastName } = formValues;

		this.props.createUser({
			variables: {
				firstname: firstName,
				lastname: lastName
			}
		});
	}

	render() {
		console.log(this.props.data);
		return (
			<div>
				<div>
					<FacebookButton title="Sign up with Facebook" />
				</div>
				<div>
					<SingupForm onFormSubmit={this.handleSignupFormSubmit.bind(this)} />
				</div>
			</div>
		);
	}
}

export default graphql(CREATE_USER, {
	name: 'createUser'
})(Signup);
