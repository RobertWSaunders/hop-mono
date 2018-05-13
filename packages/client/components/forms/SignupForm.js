import React from 'react';
import { Form, Field } from 'react-final-form';

export default (props) => (
	<Form
		onSubmit={props.onFormSubmit}
		render={({ handleSubmit }) => (
			<form onSubmit={handleSubmit}>
				<h2>Signup Form</h2>
				<div>
					<label>First Name</label>
					<Field name="firstName" component="input" placeholder="First Name" />
				</div>

				<h2>Password</h2>
				<div>
					<label>Last Name:</label>
					<Field name="lastName" component="input" placeholder="Last Name" />
				</div>

				<button type="submit">Submit</button>
			</form>
		)}
	/>
);
