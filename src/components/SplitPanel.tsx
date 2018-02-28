import * as React from 'react';
import PeriodicTable from '../containers/PeriodicTable';
import MaybeElementDetails from './MaybeElementDetails';
import './SplitPanel.css';

export interface SplitPanelProps {
	isAnyElementSelected: boolean;
	selectedElementNumber: number | null;
}

const SplitPanel: React.StatelessComponent<SplitPanelProps> = (props) => (
	<div className="SplitPanel">
		<div className="SplitPanel-left">
			<PeriodicTable />
		</div>
		{props.isAnyElementSelected && <div className="SplitPanel-right">
			<MaybeElementDetails number={props.selectedElementNumber as number} />
		</div>}
	</div>
);

export default SplitPanel;
