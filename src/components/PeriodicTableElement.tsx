import * as React from 'react';
import * as classNames from 'classnames';
import './PeriodicTableElement.css';

export interface PeriodicTableElementProps {
	number: number;
	symbol: string;
	element: string;
	subcategory: string;
}

const PeriodicTableElement: React.StatelessComponent<PeriodicTableElementProps> = (props) => (
	<div
		className={classNames('PeriodicTableElement', {
			'PeriodicTableElement--alkali-metal':          props.subcategory === 'alkali-metal',
			'PeriodicTableElement--alkaline-earth-metal':  props.subcategory === 'alkaline-earth-metal',
			'PeriodicTableElement--lanthanide':            props.subcategory === 'lanthanide',
			'PeriodicTableElement--actinide':              props.subcategory === 'actinide',
			'PeriodicTableElement--transition-metal':      props.subcategory === 'transition-metal',
			'PeriodicTableElement--post-transition-metal': props.subcategory === 'post-transition-metal',
			'PeriodicTableElement--metalloid':             props.subcategory === 'metalloid',
			'PeriodicTableElement--polyatomic-nonmetal':   props.subcategory === 'polyatomic-nonmetal',
			'PeriodicTableElement--diatomic-nonmetal':     props.subcategory === 'diatomic-nonmetal',
			'PeriodicTableElement--noble-gas':             props.subcategory === 'noble-gas',
			'PeriodicTableElement--unknown':               props.subcategory === null,
		})}
		data-atomic-number={props.number}
	>
		<span className="PeriodicTableElement-number">{props.number}</span>
		<span className="PeriodicTableElement-symbol">{props.symbol}</span>
		<span className="PeriodicTableElement-long">{props.element}</span>
	</div>
);

export default PeriodicTableElement;
