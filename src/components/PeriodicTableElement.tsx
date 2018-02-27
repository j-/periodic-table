import * as React from 'react';
import './PeriodicTableElement.css';

export interface PeriodicTableElementProps {
	number: number;
	symbol: string;
	element: string;
}

const PeriodicTableElement: React.StatelessComponent<PeriodicTableElementProps> = (props) => (
	<div className="PeriodicTableElement" data-atomic-number={props.number}>
		<span className="PeriodicTableElement-number">{props.number}</span>
		<span className="PeriodicTableElement-symbol">{props.symbol}</span>
		<span className="PeriodicTableElement-long">{props.element}</span>
	</div>
);

export default PeriodicTableElement;
