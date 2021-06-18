import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch } from 'react-router-dom';
import LayoutMain from './../../layouts/LayoutMain';
import ReactLoaderSpinner from './../../components/ReactLoaderSpinner';
import { ROUTES_MAIN } from './../../routes';
import './App.css';

function App() {
	const renderRouterMain = () => {
		let result = null;
		if (ROUTES_MAIN.length > 0) {
			result = ROUTES_MAIN.map((route, index) => {
				return (
					<LayoutMain
						key={index}
						path={route.path}
						exact={route.exact}
						component={route.component}
					/>
				);
			});
		}
		return <Switch>{result}</Switch>;
	};
	return (
		<Router>
			<div className='App'>
				{renderRouterMain()}
				<ReactLoaderSpinner />
			</div>
		</Router>
	);
}

export default App;
