import * as React from 'react';
import * as classNames from 'classnames';
import { getSubcategoryClassName, getHighlightedClassName } from '../class-names';
import './SubcategoryItem.css';

export interface SubcategoryItemProps {
	isHighlighted: boolean;
	subcategory: string | null;
	onToggle: () => void;
}

const SubcategoryItem: React.StatelessComponent<SubcategoryItemProps> =
({ isHighlighted, children, onToggle, subcategory }) => (
	<label
		className={classNames(
			'SubcategoryItem',
			getSubcategoryClassName(subcategory),
			getHighlightedClassName(isHighlighted),
		)}
	>
		<input type="checkbox" checked={isHighlighted} onChange={() => onToggle()} />
		<span className="SubcategoryItem-label">{children}</span>
	</label>
);

export default SubcategoryItem;
