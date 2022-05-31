import React from 'react';
import NavBar from './navbar';

class Contact extends React.Component {
	onSubmitHandler = (e) => {
		e.preventDefault();
		this.props.history.push('/');
	};
	render() {
		return (
			<div className='books'>
				<NavBar />
				<h1>Contact</h1>

				<form onSubmit={this.onSubmitHandler}>
					<label>
						Name:
						<input type='text' />
					</label>
					<label>
						Email:
						<input type='text' />
					</label>
					<input type='submit' value='Submit' />
				</form>
			</div>
		);
	}
}

export default Contact;
