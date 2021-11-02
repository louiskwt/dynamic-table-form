import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableForm from './components/TableForm/TableForm';
import FinishPage from './components/FinishPage/FinishPage';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/complete'>
						<FinishPage />
					</Route>
					<Route path='/'>
						<TableForm />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
