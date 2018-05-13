import React from 'react';
import { Form, Field } from 'react-final-form';

export default (props) => (
	<Form
		onSubmit={props.onFormSubmit}
		render={({ handleSubmit }) => (
			<form onSubmit={handleSubmit}>
				<h2>Login Form</h2>
				<div>
					<label>Email</label>
					<Field name="firstName" component="input" placeholder="First Name" />
				</div>

				<h2>Password</h2>
				<div>
					<label>Password</label>
					<Field name="email" component="input" placeholder="Email" />
				</div>

				<button type="submit">Submit</button>
			</form>
		)}
	/>
);
