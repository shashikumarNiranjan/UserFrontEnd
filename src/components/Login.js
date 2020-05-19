import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../validation/validator';
import { Row, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Header from './Header';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formData: {},
			errors: {}, // Contains login field errors
			formSubmitted: false // Indicates submit status of login form
		};

		this.renderError = this.renderError.bind(this);
	}

	handleInputChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		let { formData } = this.state;
		formData[name] = value;

		this.setState({
			formData: formData
		});
	};

	validateLoginForm = (e) => {
		let errors = {};
		const { formData } = this.state;

		if (isEmpty(formData.email)) {
			errors.email = "Email can't be blank";
		} else if (!isEmail(formData.email)) {
			errors.email = 'Please enter a valid email';
		}

		if (isEmpty(formData.password)) {
			errors.password = "Password can't be blank";
		} else if (isContainWhiteSpace(formData.password)) {
			errors.password = 'Password should not contain white spaces';
		} else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
			errors.password = "Password's length must between 6 to 16";
		}

		if (isEmpty(errors)) {
			return true;
		} else {
			return errors;
		}
	};

	login = (e) => {
		e.preventDefault();
		const { formData } = this.state;

		let errors = this.validateLoginForm();

		if (errors === true) {
			if (formData.email === 'hruday@gmail.com' && formData.password === 'hruday123') {
				this.props.history.push('/dashboard');
			} else {
				this.setState({
					ResponseError: true
				});
			}
		} else {
			this.setState({
				errors: errors,
				formSubmitted: true
			});
		}

		console.log(formData.email);
		console.log(formData.email === 'hruday@gmail.com' && formData.password === 'hruday123');
	};

	renderError() {
		if (this.state.ResponseError === true) {
			return (
				<div className="alert alert-danger error-message">
					<strong>Invalid Email or Password!</strong>
				</div>
			);
		}
	}

	render() {
		const { errors, formSubmitted } = this.state;

		return (
			<div className="">
				<Header />
				<Row className="card-global">
					<h3 class="mb-4">LOGIN PAGE</h3>
					{this.renderError()}
					<div className="form-fields">
						<form onSubmit={this.login}>
							<FormGroup
								className=""
								controlId="email"
								validationState={formSubmitted ? errors.email ? 'error' : 'success' : null}
							>
								<ControlLabel>Email*</ControlLabel>
								<FormControl
									type="text"
									name="email"
									placeholder="Enter your email"
									onChange={this.handleInputChange}
								/>
								{errors.email && <HelpBlock>{errors.email}</HelpBlock>}
							</FormGroup>
							<FormGroup
								controlId="password"
								validationState={formSubmitted ? errors.password ? 'error' : 'success' : null}
							>
								<ControlLabel>Password*</ControlLabel>
								<FormControl
									type="password"
									name="password"
									placeholder="Enter your password"
									onChange={this.handleInputChange}
								/>
								{errors.password && <HelpBlock>{errors.password}</HelpBlock>}
							</FormGroup>
							<div className="">
								<div>
									<button type="submit" class="btn btn-primary">
										LOGIN
									</button>
								</div>
							</div>
						</form>
					</div>
				</Row>
			</div>
		);
	}
}

export default Login;
