import * as React from 'react';
import PeriodicTable from '../containers/PeriodicTable';
import SubcategoryList from '../containers/SubcategoryList';

const App: React.StatelessComponent = () => (
	<div className="App">
		<PeriodicTable />

		<br />
		<br />

		<SubcategoryList />
	</div>
);

export default App;
