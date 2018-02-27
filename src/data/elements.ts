interface Element {
	number: number;
	symbol: string;
	element: string;
	group: number | null;
	period: number;
	weight: string;
	density: string;
	melt: string;
	boil: string;
	heatCapacity: string;
	electronegativity: string;
	abundance: string;
}

const data: Element[] = require('./elements.json');

export default data;
