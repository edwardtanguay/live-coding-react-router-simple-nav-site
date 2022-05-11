import './App.scss';
import './pages/PageWelcome';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageAbout } from './pages/PageAbout';
import { NavLink } from 'react-router-dom';

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
			<PageWelcome />
			<PageBooks />
			<PageAbout />
		</div>
	);
}

export default App;
