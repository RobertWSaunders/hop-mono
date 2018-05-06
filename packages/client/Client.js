import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from "react-router-dom";
import { defaults, resolvers, typeDefs } from "./cache";

const rootElement = document.querySelector('#root');

const uri = (process.env.NODE_ENV === "development") ?
	`https://localhost:${process.env.PORT}/graphql` :
	`https://${window.location.host}/graphql`;

// const apolloClient = new ApolloClient({
// 	uri,
// 	clientState: {
// 		defaults,
// 		resolvers,
// 		typeDefs
// 	}
// });

const Client = () => (
	// <ApolloProvider client={apolloClient}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	// </ApolloProvider>
);

render(<Client />, rootElement);
