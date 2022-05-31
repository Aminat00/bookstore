import React from 'react';

import './notfound.css';

class NotFound extends React.Component {
	render() {
		return (
			<div className='page'>
				<h1>Page not found</h1>
				<p>Unfortunately we didn't find the page you were searching</p>
			</div>
		);
	}
}

export default NotFound;
