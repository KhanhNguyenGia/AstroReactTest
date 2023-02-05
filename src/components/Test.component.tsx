import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Static = () => {
	console.log(
		'This console.log proves that this only renders once and does not change page aka. react-router takes over'
	);
	return <div>Static so only render once</div>;
};

const Test = () => {
	return (
		<div>
			<Static />
			<BrowserRouter>
				<Routes>
					<Route
						path='/dashboard'
						element={
							<div>
								<h1>Home</h1>
								<Link to='/dashboard/about'>About</Link>
								<Link to='/dashboard/contact'>Contact</Link>
							</div>
						}
					/>
					<Route
						path='/dashboard/about'
						element={
							<div>
								<h1>About</h1>
								<Link to='/dashboard'>Home</Link>
								<Link to='/dashboard/contact'>Contact</Link>
							</div>
						}
					/>
					<Route
						path='/dashboard/contact'
						element={
							<div>
								<h1>Contact</h1>
								<Link to='/dashboard'>Home</Link>
								<Link to='/dashboard/about'>About</Link>
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Test;
