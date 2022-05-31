import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import one from '../images/one.jpg';
import '../mainpage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const styles = {
	card: {
		backgroundColor: '#B7E0F2',
		display: 'inline-block',
		width: '300px',
		height: '45vw',
		margin: '10px 10px',
	},
	cardImage: {
		width: '100%',
		height: '30vw',
		objectFit: 'cover',
	},
};

function Books() {
	const navigate = useNavigate();

	function handleClick() {
		//event.preventDefault();
		navigate('/Login');
	}

	const [book, setBook] = useState('');
	const [result, setResult] = useState([]);
	const [apiKey, setApiKey] = useState('AIzaSyAVfa1K02yFaUBjYnO3Yhgn28XdmF0WGi4');

	function handleChange(event) {
		const book = event.target.value;
		setBook(book);
	}
	function handleSubmit(event) {
		event.preventDefault();
		axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book + '&key=' + apiKey + '&maxResults=20').then((data) => {
			console.log(data.data.items);
			setResult(data.data.items);
		});
	}
	return (
		<div className='books'>
			<Navbar bg='light' expand='lg'>
				<Container fluid>
					<Navbar.Brand as={Link} to='/'>
						Bookstore
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
							<Nav.Link as={Link} to='/books'>
								Books
							</Nav.Link>

							<Nav.Link as={Link} to='/Contact'>
								Contact
							</Nav.Link>
							<Nav.Link as={Link} to='/addbook'>
							Add a Book
						</Nav.Link>
						</Nav>
						<Form className='d-flex'>
							<FormControl type='search' placeholder='Search' className='me-2' aria-label='Search' onChange={handleChange} autoComplete='off' />
							<Button onClick={handleSubmit} variant='outline-success'>
								Search
							</Button>
						</Form>
						<Button onClick={handleClick} variant='success' style={{ marginRight: '20px' }}>
							Login
						</Button>{' '}
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container className='container_card'>
				{result.map((book) => (
					<Card style={styles.card} key={book.id}>
						<Card.Img variant='top' src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} style={styles.cardImage} />
						<Card.Body>
							<Card.Title>{book.volumeInfo.title}</Card.Title>
							<Card.Text>
								by <strong>{book.volumeInfo.authors}</strong>
							</Card.Text>
							<Card.Text>amount</Card.Text>
							<Button variant='primary'>Add to cart</Button>
						</Card.Body>
					</Card>
				))}
				<Card style={styles.card}>
					<Card.Img variant='top' src={one} style={styles.cardImage} />
					<Card.Body>
						<Card.Title>In Search of Lost Time </Card.Title>
						<Card.Text>
							by <strong>Marcel Proust</strong>
						</Card.Text>

						<Button variant='primary'>Add to cart</Button>
					</Card.Body>
				</Card>
				<Card style={styles.card}>
					<Card.Img variant='top' src={one} style={styles.cardImage} />
					<Card.Body>
						<Card.Title>In Search of Lost Time </Card.Title>
						<Card.Text>
							by <strong>Marcel Proust</strong>
						</Card.Text>
						<Button variant='primary'>Add to cart</Button>
					</Card.Body>
				</Card>
				<Card style={styles.card}>
					<Card.Img variant='top' src={one} style={styles.cardImage} />
					<Card.Body>
						<Card.Title>In Search of Lost Time </Card.Title>
						<Card.Text>
							by <strong>Marcel Proust</strong>
						</Card.Text>
						<Button variant='primary'>Add to cart</Button>
					</Card.Body>
				</Card>
				<Card style={styles.card}>
					<Card.Img variant='top' src={one} style={styles.cardImage} />
					<Card.Body>
						<Card.Title>In Search of Lost Time </Card.Title>
						<Card.Text>
							by <strong>Marcel Proust</strong>
						</Card.Text>
						<Button variant='primary'>Add to cart</Button>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
}

export default Books;
