import React from 'react';
import Navbar from './navbar';
function ValidationMessage(props) {
	if (!props.valid) {
		return <div className='error-msg'>{props.message}</div>;
	}
	return null;
}

class Addbook extends React.Component {
	state = {
		productId: '',
		productIdValid: false,
		productName: '',
		productNameValid: false,
		price: '',
		priceValid: false,
		formValid: false,
		errorMsg: {},
	};
	validateForm = () => {
		const { productIdValid, productNameValid, priceValid } = this.state;
		this.setState({
			formValid: productIdValid && productNameValid && priceValid,
		});
	};

	updateProductId = (productId) => {
		this.setState({ productId }, this.validateProductId);
	};
	validateProductId = () => {
		const { productId } = this.state;
		let productIdValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (!productId) {
			productIdValid = false;
			errorMsg.productId = 'The id of product cant be empty';
		}
		this.setState({ productIdValid, errorMsg }, this.validateForm);
	};

	updateProductName = (productName) => {
		this.setState({ productName }, this.validateProductName);
	};
	validateProductName = () => {
		const { productName } = this.state;
		let productNameValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (!productName) {
			productNameValid = false;
			errorMsg.productName = 'The name of product cant be empty';
		}
		this.setState({ productNameValid, errorMsg }, this.validateForm);
	};
	updatePrice = (price) => {
		this.setState({ price }, this.validatePrice);
	};
	validatePrice = () => {
		const { price } = this.state;
		let priceValid = true;
		let errorMsg = { ...this.state.errorMsg };

		if (!/\d/.test(price)) {
			priceValid = false;
			errorMsg.price = 'Only numbers';
		}
		this.setState({ priceValid, errorMsg }, this.validateForm);
	};

	render() {
		return (
			<div>
				<Navbar />
				<div className='App'>
					<header>Form Validation</header>

					<main role='main'>
						<form action='#' id='js-form'>
							<div className='form-group'>
								<label htmlFor='bookId'>BookId</label>
								<ValidationMessage valid={this.state.bookIdValid} message={this.state.errorMsg.bookId} />
								<input type='text' id='bookId' name='bookId' className='form-field' value={this.state.bookId} onChange={(e) => this.updateProductId(e.target.value)} />
							</div>

							<div className='form-group'>
								<label htmlFor='productName'>Book Name</label>
								<ValidationMessage valid={this.state.productNameValid} message={this.state.errorMsg.productName} />
								<input type='text' id='productName' name='productName' className='form-field' value={this.state.productName} onChange={(e) => this.updateProductName(e.target.value)} />
							</div>

							<div className='form-group'>
								<label htmlFor='price'>Price</label>
								<ValidationMessage valid={this.state.priceValid} message={this.state.errorMsg.price} />
								<input type='text' id='price' name='price' className='form-field' value={this.state.price} onChange={(e) => this.updatePrice(e.target.value)} />
							</div>

							<div className='form-controls'>
								<button className='button' type='submit' disabled={!this.state.formValid}>
									Add Book
								</button>
							</div>
						</form>
					</main>
				</div>
			</div>
		);
	}
}

export default Addbook;
