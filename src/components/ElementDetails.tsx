import * as React from 'react';
import { Element } from '../data/elements';
import './ElementDetails.css';

export interface ElementDetailsProps extends Element {
	clearSelected: () => void;
}

const ElementDetails: React.StatelessComponent<ElementDetailsProps> = (props) => (
	<div className="ElementDetails">
		<button className="ElementDetails-close" type="button" onClick={props.clearSelected}>
			&times;
		</button>

		<h1>{props.element}</h1>

		<dl>
			<dt><strong>Group</strong></dt>
			<dd>{props.group || '-'}</dd>

			<br />

			<dt><strong>Period</strong></dt>
			<dd>{props.period}</dd>

			<br />

			<dt><strong>Atomic weight</strong></dt>
			<dd>{props.weight}</dd>

			<br />

			<dt><strong>Density</strong></dt>
			<dd>{props.density}</dd>

			<br />

			<dt><strong>Melting point (K)</strong></dt>
			<dd>{props.melt}</dd>

			<br />

			<dt><strong>Boiling point (K)</strong></dt>
			<dd>{props.boil}</dd>
		</dl>
	</div>
);

export default ElementDetails;
