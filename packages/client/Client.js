import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { WebSocketLink } from "apollo-link-ws";
import { BrowserRouter } from "react-router-dom";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { defaults, resolvers, typeDefs } from "./cache";
import { SubscriptionClient } from "subscriptions-transport-ws";

const rootElement = document.querySelector('#root');

const GRAPHQL_ENDPOINT = process.env.NODE_ENV === "development"
	? `https://localhost:3000/graphql`
	: `https://${window.location.host}/graphql`;

const WS_GRAPHQL_ENDPOINT =
	process.env.NODE_ENV === "development"
		? `ws://localhost:3000/subscriptions`
		: `ws://${window.location.host}/subscriptions`;

const cache = new InMemoryCache();

const stateLink = withClientState({ cache, resolvers, defaults, typeDefs });

const transportlink = ApolloLink.split(
	({ query: { definitions } }) =>
		definitions.some(
			({ kind, operation }) =>
				kind === "OperationDefinition" && operation === "subscription"
		),
	new WebSocketLink(
		new SubscriptionClient(WS_GRAPHQL_ENDPOINT, {
			reconnect: true
		})
	),
	new HttpLink({
		uri: GRAPHQL_ENDPOINT,
		credentials: "same-origin"
	})
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	}
	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const apolloClient = new ApolloClient({
	cache,
	link: ApolloLink.from([errorLink, stateLink, transportlink])
});

const Client = () => (
	<ApolloProvider client={apolloClient}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
);

render(<Client />, rootElement);
