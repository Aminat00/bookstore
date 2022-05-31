import React from 'react';
import './mainpage.css';
import { Button } from 'react-bootstrap';
import NavBar from './components/navbar';
import Slider from './components/slider';
import { useNavigate } from 'react-router-dom';

function MainPage() {
	const navigate = useNavigate();

	function handleClick() {
		navigate('/Books');
	}

	return (
		<div className='books'>
			<header>
				<NavBar />
				<h1>
					Today's Reader <br /> Tomorrow's Leader
				</h1>
				<Button onClick={handleClick} className='explore' variant='primary' size='lg'>
					Explore Books
				</Button>
				<Slider />
			</header>
			<footer>
				<h5>
					<a>support@books.com</a>
				</h5>
			</footer>
		</div>
	);
}

export default MainPage;
