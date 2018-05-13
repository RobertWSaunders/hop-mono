import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Login from "./Login";

export default class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/signup" component={Signup} />
					<PrivateRoute path="/" component={Dashboard} />
				</Switch>
			</div>
		);
	}
}
