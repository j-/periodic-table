import * as React from 'react';
import ElementDetails from '../containers/ElementDetails';
import elements from '../data/elements';

export interface MaybeElementDetailsProps {
	number: number;
}

const MaybeElementDetails: React.StatelessComponent<MaybeElementDetailsProps> = (props) => {
	const element = elements.find((element) => element.number === props.number);
	if (element) {
		return <ElementDetails {...element} />;
	} else {
		return null;
	}
};

export default MaybeElementDetails;
