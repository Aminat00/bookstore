import React from 'react';
import NavBar from './navbar';
import '../App.css';

class Contact extends React.Component {
	onSubmitHandler = (e) => {
		e.preventDefault();
		this.props.history.push('/');
	};
	render() {
		return (
			<div>
			<NavBar />
<div className='App'>
				
				<h1>Contact</h1>

				<form onSubmit={this.onSubmitHandler} id='js-form' className='contact'>
				<div className='form-group'>
				<label htmlFor='name'>
				Name
				</label>
						<input type='text' />
					
				</div>
				<div className='form-group'>
				<label htmlFor='email'>
						Email
					</label>
					<input type='text' />
				</div>
				<div className='form-group'>
				<label htmlFor='email'>
						Message
					</label>
						<textarea rows="7" cols="33">Please write your concerns</textarea>
					
				</div>
				<div className='form-controls'>
								<button
									className='button'
									type='submit'
									//disabled={!this.state.formValid}>
									onclick
									Login>
									Submit
								</button>
							</div>
				</form>
			</div>
			</div>
			
		);
	}
}

export default Contact;
