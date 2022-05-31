import React from 'react';
import '../App.css';
import NavBar from './navbar';

function ValidationMessage(props) {
	if (!props.valid) {
		return <div className='error-msg'>{props.message}</div>;
	}
	return null;
}

class Register extends React.Component {
	state = {
		username: '',
		usernameValid: false,
		email: '',
		emailValid: false,
		password: '',
		paswordValid: false,
		passwordConfirm: '',
		passwordConfirmValid: false,
		formValid: false,
		errorMsg: {},
	};
	validateForm = () => {
		const { usernameValid, emailValid, passwordValid, passwordConfirmValid } =
			this.state;
		this.setState({
			formValid: usernameValid && emailValid & passwordConfirmValid,
		});
	};

	updateUsername = (username) => {
		this.setState({ username }, this.validateUsername);
	};

	validateUsername = () => {
		const { username } = this.state;
		let usernameValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (username.length < 3) {
			usernameValid = false;
			errorMsg.username = 'Must be at least 3 chars long';
		}

		this.setState({ usernameValid, errorMsg }, this.validateForm);
	};

	updateEmail = (email) => {
		this.setState({ email }, this.validateEmail);
	};

	validateEmail = () => {
		const { email } = this.state;
		let emailValid = true;
		let errorMsg = { ...this.state.errorMsg };

		// checks for format _@_._
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			emailValid = false;
			errorMsg.email = 'Invalid email format';
		}

		this.setState({ emailValid, errorMsg }, this.validateForm);
	};

	updatePassword = (password) => {
		this.setState({ password }, this.validatePassword);
	};

	validatePassword = () => {
		const { password } = this.state;
		let passwordValid = true;
		let errorMsg = { ...this.state.errorMsg };

		// must be 6 chars
		// must contain a number
		// must contain a special character

		if (password.length < 6) {
			passwordValid = false; /*  */
			errorMsg.password = 'The password must be at least 6 chars long';
		} else if (!/\d/.test(password)) {
			passwordValid = false;
			errorMsg.password = 'The password must contain numbers';
		} else if (!/[!@#$%^&*]/.test(password)) {
			passwordValid = false;
			errorMsg.password =
				'The password must contain special character: !@#$%^&*';
		}

		this.setState({ passwordValid, errorMsg }, this.validateForm);
	};

	updatePasswordConfirm = (passwordConfirm) => {
		this.setState({ passwordConfirm }, this.validatePasswordConfirm);
	};

	validatePasswordConfirm = () => {
		const { passwordConfirm, password } = this.state;
		let passwordConfirmValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (password !== passwordConfirm) {
			passwordConfirmValid = false;
			errorMsg.passwordConfirm = 'The passwords doesnt match';
		}

		this.setState({ passwordConfirmValid, errorMsg }, this.validateForm);
	};

	render() {
		return (
			<div>
				<NavBar />
				<div className='App'>
					<h3>Lets Register</h3>

					<main role='main'>
						<form className='register' action='#' id='js-form'>
							<div className='form-group'>
								<label htmlFor='username'>User Name</label>
								<ValidationMessage
									valid={this.state.usernameValid}
									message={this.state.errorMsg.username}
								/>
								<input
									type='text'
									id='username'
									name='username'
									className='form-field'
									value={this.state.username}
									onChange={(e) => this.updateUsername(e.target.value)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='email'>Email</label>
								<ValidationMessage
									valid={this.state.emailValid}
									message={this.state.errorMsg.email}
								/>
								<input
									type='text'
									id='email'
									name='email'
									className='form-field'
									value={this.state.email}
									onChange={(e) => this.updateEmail(e.target.value)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='password'>Password</label>
								<ValidationMessage
									valid={this.state.passwordValid}
									message={this.state.errorMsg.password}
								/>
								<input
									type='password'
									id='password'
									name='password'
									className='form-field'
									value={this.state.password}
									onChange={(e) => this.updatePassword(e.target.value)}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='password-confirmation'>Confirm Password</label>
								<ValidationMessage
									valid={this.state.passwordConfirmValid}
									message={this.state.errorMsg.passwordConfirm}
								/>
								<input
									type='password'
									id='password-confirmation'
									name='password-confirmation'
									className='form-field'
									value={this.state.passwordConfirm}
									onChange={(e) => this.updatePasswordConfirm(e.target.value)}
								/>
							</div>

							<div className='form-controls'>
								<button
									className='button'
									type='submit'
									disabled={!this.state.formValid}>
									Sign Up
								</button>
							</div>
						</form>
					</main>
				</div>
			</div>
		);
	}
}

export default Register;
