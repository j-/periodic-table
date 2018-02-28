import * as React from 'react';
import SplitPanel from '../containers/SplitPanel';
import SubcategoryList from '../containers/SubcategoryList';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App">
		<SplitPanel />

		<br />
		<br />

		<SubcategoryList />
	</div>
);

export default App;
