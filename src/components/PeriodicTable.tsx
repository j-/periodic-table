import * as React from 'react';
import * as classNames from 'classnames';
import elements from '../data/elements';
import PeriodicTableElement from './PeriodicTableElement';
import './PeriodicTable.css';

export interface PeriodicTableProps {
	wide?: boolean;
}

const PeriodicTable: React.StatelessComponent<PeriodicTableProps> = (props) => {
	const className = classNames('PeriodicTable', {
		'PeriodicTable--wide': props.wide,
		'PeriodicTable--narrow': !props.wide,
	});
	const children = elements.map((element) => (
		<PeriodicTableElement
			key={element.number}
			number={element.number}
			symbol={element.symbol}
			element={element.element}
		/>
	));
	return <div className={className}>{children}</div>;
};

export default PeriodicTable;
