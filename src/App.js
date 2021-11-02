import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TableForm from './components/TableForm/TableForm';

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch path='/complete'></Switch>

				<Switch exact path='/'>
					<TableForm />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
