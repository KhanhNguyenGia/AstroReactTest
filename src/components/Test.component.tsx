import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { count } from '../store/count';
import { useStore } from '@nanostores/react';

const Static = () => {
	const $count = useStore(count);
	console.log(
		'This console.log proves that this only renders once and does not change page aka. react-router takes over'
	);
	return (
		<div className='border-red-500 border-solid border-2 mb-10'>
			Static so only render once<div>count: {$count}</div>
		</div>
	);
};

const Home = () => {
	console.log('Home');
	const $count = useStore(count);

	return (
		<div className='border-green-500 border-solid border-2'>
			<h1>Home</h1>
			<Link to='/dashboard/about'>About</Link>
			<Link to='/dashboard/contact'>Contact</Link>
			<button className='bg-black text-white px-3 py-2' onClick={() => count.set($count - 1)}>
				-
			</button>
			<button className='bg-black text-white px-3 py-2' onClick={() => count.set($count + 1)}>
				+
			</button>
		</div>
	);
};

const About = () => {
	console.log('About');
	return (
		<div>
			<h1>About</h1>
			<Link to='/dashboard'>Home</Link>
			<Link to='/dashboard/contact'>Contact</Link>
		</div>
	);
};

const Contact = () => {
	console.log('Contact');
	return (
		<div>
			<h1>Contact</h1>
			<Link to='/dashboard'>Home</Link>
			<Link to='/dashboard/about'>About</Link>
		</div>
	);
};

const Test = () => {
	return (
		<div>
			<Static />
			<BrowserRouter>
				<Routes>
					<Route path='/dashboard' element={<Home />} />
					<Route path='/dashboard/about' element={<About />} />
					<Route path='/dashboard/contact' element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Test;
