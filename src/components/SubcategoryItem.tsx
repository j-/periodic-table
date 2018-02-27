import * as React from 'react';

export interface SubcategoryItemProps {
	isActive: boolean;
	onToggle: () => void;
}

const SubcategoryItem: React.StatelessComponent<SubcategoryItemProps> = ({ isActive, children, onToggle }) => (
	<label className="SubcategoryItem">
		<input type="checkbox" checked={isActive} onChange={() => onToggle()} />
		<span className="SubcategoryItem-label">{children}</span>
	</label>
);

export default SubcategoryItem;
