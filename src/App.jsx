import './App.scss';
import './pages/PageWelcome';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';

function App() {
	return (
		<div className="App">
			<h1>Personal Site</h1>
			<PageWelcome />
			<PageBooks/>
		</div>
	);
}

export default App;
