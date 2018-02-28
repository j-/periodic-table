import * as React from 'react';
import * as classNames from 'classnames';
import { getSubcategoryClassName, getHighlightedClassName } from '../class-names';
import './PeriodicTableElement.css';

export interface PeriodicTableElementProps {
	number: number;
	symbol: string;
	element: string;
	subcategory: string;
	isHighlighted: boolean;
}

const PeriodicTableElement: React.StatelessComponent<PeriodicTableElementProps> = (props) => (
	<div
		className={classNames(
			'PeriodicTableElement',
			getSubcategoryClassName(props.subcategory),
			getHighlightedClassName(props.isHighlighted),
		)}
		data-atomic-number={props.number}
	>
		<span className="PeriodicTableElement-number">{props.number}</span>
		<span className="PeriodicTableElement-symbol">{props.symbol}</span>
		<span className="PeriodicTableElement-long">{props.element}</span>
	</div>
);

export default PeriodicTableElement;
