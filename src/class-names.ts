export const getSubcategoryClassName = (subcategory: string | null) => {
	switch (subcategory) {
		case 'alkali-metal': return 'color--alkali-metal';
		case 'alkaline-earth-metal': return 'color--alkaline-earth-metal';
		case 'lanthanide': return 'color--lanthanide';
		case 'actinide': return 'color--actinide';
		case 'transition-metal': return 'color--transition-metal';
		case 'post-transition-metal': return 'color--post-transition-metal';
		case 'metalloid': return 'color--metalloid';
		case 'polyatomic-nonmetal': return 'color--polyatomic-nonmetal';
		case 'diatomic-nonmetal': return 'color--diatomic-nonmetal';
		case 'noble-gas': return 'color--noble-gas';
		case null: return 'color--unknown';
		default: return '';
	}
};

export const getActiveClassName = (isActive: boolean) => {
	return isActive ?
		'color--active' :
		'';
};
