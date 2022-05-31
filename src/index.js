import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './mainpage';
import Login from './components/login';
import Books from './components/books';
import Contact from './components/contact';
import NotFound from './notfound';
import Register from './components/register';
import Addbook from './components/addbook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<Routes>
			<Route exact path='/' element={<MainPage />} />
			<Route path='/books' element={<Books />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/addBook' element={<Addbook />} />

			<Route element={<NotFound />} />
		</Routes>
	</Router>
);

//ReactDOM.render(document.getElementById('root'));

// ReactDOM.render(
// 	<Router>
// 		<App />
// 	</Router>,
// 	document.getElementById('root')
// );
