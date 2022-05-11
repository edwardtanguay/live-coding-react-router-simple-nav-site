import './App.scss';
import './pages/PageWelcome';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageAbout } from './pages/PageAbout';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<h1>Personal Site</h1>
			<hr />
			<nav>
				<NavLink to="/welcome">Welcome</NavLink> |{' '}
				<NavLink to="/books">Books</NavLink> |{' '}
				<NavLink to="/about">About</NavLink>
			</nav>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books" element={<PageBooks />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/" element={<Navigate to="/welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;
