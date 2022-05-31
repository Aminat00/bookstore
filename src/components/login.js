import React, { useEffect, useState } from 'react';
import NavBar from './navbar';
import '../App.css';

function ValidationMessage(props) {
	if (!props.valid) {
		return <div className='error-msg'>{props.message}</div>;
	}
	return null;
}

class Login extends React.Component {
	state = {
		email: '',
		emailValid: false,
		password: '',
		paswordValid: false,

		formValid: false,
		errorMsg: {},
	};
	validateForm = () => {
		const { usernameValid, emailValid, passwordValid, passwordConfirmValid } =
			this.state;
		this.setState({
			formValid: emailValid && passwordValid,
		});
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

	render() {
		return (
			<div>
				<NavBar />
				<div className='App'>
					<h2>Login</h2>
					<main role='main'>
						<form className='login' action='#' id='js-form'>
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

							<div className='form-controls'>
								<button
									className='button'
									type='submit'
									//disabled={!this.state.formValid}>
									onclick
									Login>
									Sign Up
								</button>
							</div>
						</form>
					</main>
					<h5>Don't have an account yet?</h5>
					<a href='/register'>SignUp</a>
				</div>
			</div>
		);
	}
}

export default Login;
// function Login() {
// 	return (
// 		<div>
// 			<NavBar />
// 			<div>
// 				<form className='form-username'>
// 					<input className='username' type='email' placeholder='Email' />
// 				</form>

// 				<form className='form-password'>
// 					<input className='password' type='password' placeholder='Password' />
// 				</form>

// 				<div className='buttons'>
// 					<button className='button is-primary login'>Login</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
// export default Login;
