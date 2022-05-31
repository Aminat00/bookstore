import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { createBrowserHistory as history } from 'history';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavBar() {
	const users = [
		{ id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User' },
		{ id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User' },
	];
	const navigate = useNavigate();

	function handleClick() {
		//event.preventDefault();
		navigate('/Login');
	}

	return (
		<Navbar bg='light' expand='lg'>
			<Container fluid>
				<Navbar.Brand as={Link} to='/'>
					Bookstore
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
						<Nav.Link as={Link} to='/Books'>
							Books
						</Nav.Link>

						<Nav.Link as={Link} to='/Contact'>
							Contact
						</Nav.Link>
						<Nav.Link as={Link} to='/addbook'>
							Add a Book
						</Nav.Link>
					</Nav>
					{/* <Form className='d-flex'>
						<FormControl
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
							onChange={handleChange}
							autoComplete='off'
						/>
						<Button onClick={handleSubmit} variant='outline-success'>
							Search
						</Button>
					</Form> */}
					<Button onClick={handleClick} variant='success' style={{ marginRight: '20px' }}>
						Login
					</Button>{' '}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
