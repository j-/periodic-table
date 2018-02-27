import * as React from 'react';
import PeriodicTable from './PeriodicTable';
import SubcategoryList from './SubcategoryList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<PeriodicTable />

		<br />
		<br />

		<SubcategoryList />
	</div>
);

export default App;
