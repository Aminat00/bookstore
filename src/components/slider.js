import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import bg4 from '../images/bg4.webp';
import bg2 from '../images/bg2.jpg';
import bg3 from '../images/bg3.jpg';

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item interval={1000}>
				<img
					className='d-block w-100'
					src={bg4}
					alt='First slide'
					style={({ width: '100vw' }, { height: '700px' })}
				/>
			</Carousel.Item>
			<Carousel.Item interval={500}>
				<img
					className='d-block w-100'
					src={bg2}
					alt='Second slide'
					style={({ width: '100vw' }, { height: '700px' })}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={bg3}
					alt='Third slide'
					style={({ width: '100vw' }, { height: '700px' })}
				/>
			</Carousel.Item>
		</Carousel>
	);
}
