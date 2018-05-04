import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {

	class Authentication extends Component {
		handleRender(props) {

			// if (!authenticated) {
			//	return (
			//		<Redirect
			//			to={{
			//				pathname: "/login",
			//				state: {
			//					from: props.location,
			//					message: "You need to login!"
			//				}
			//			}}
			//		/>
			//	);
			// }

			return <ComposedComponent {...props} />;
		}

		render() {
			return <Route {...rest} render={this.handleRender.bind(this)} />;
		}
	}

	return <Authentication />;
};

export default PrivateRoute;
