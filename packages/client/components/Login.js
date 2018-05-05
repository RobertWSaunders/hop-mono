import React, { Component } from "react";

const FB_SDK_VERSION = "v3.0";
const FB_APP_ID = "176532162968167";

class Login extends Component {
	constructor(props) {
		super(props);

		this.loginWithFacebook.bind(this);
		this.handleFBLoginResponse.bind(this);
	}

	componentDidMount() {
		(function(d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		})(document, "script", "facebook-jssdk");

		window.fbAsyncInit = function() {
			FB.init({
				appId: FB_APP_ID,
				cookie: true,
				xfbml: true,
				version: FB_SDK_VERSION
			});
		};
	}

	loginWithFacebook() {
		window.FB.login(
			function(response) {
				this.handleFBLoginResponse(response);
			}.bind(this),
			{
				scope: "email",
				return_scopes: true
			}
		);
	}

	handleFBLoginResponse(response) {
		if (response.authResponse) {
			console.log("You are logged in!");
		} else {
			console.log(
				"You are not logged in, the user cancelled login or did not fully authorize!"
			);
		}
	}

	render() {
		return (
			<div>
				<button onClick={this.loginWithFacebook.bind(this)}>
					Login with Facebook
				</button>
			</div>
		);
	}
}

export default Login;
