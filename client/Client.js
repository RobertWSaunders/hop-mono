import React from 'react';
import ReactDOM from 'react-dom';

const Client = () => {
	return (
		<div>
			Hello Hop! This is the web app we are building!
		</div>
	);
};

ReactDOM.render(<Client />, document.querySelector('#root'));
