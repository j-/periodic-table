import * as React from 'react';
import * as classNames from 'classnames';
import { getSubcategoryClassName, getActiveClassName } from '../class-names';

export interface SubcategoryItemProps {
	isActive: boolean;
	subcategory: string | null;
	onToggle: () => void;
}

const SubcategoryItem: React.StatelessComponent<SubcategoryItemProps> =
({ isActive, children, onToggle, subcategory }) => (
	<label
		className={classNames(
			'SubcategoryItem',
			getSubcategoryClassName(subcategory),
			getActiveClassName(isActive),
		)}
	>
		<input type="checkbox" checked={isActive} onChange={() => onToggle()} />
		<span className="SubcategoryItem-label">{children}</span>
	</label>
);

export default SubcategoryItem;
