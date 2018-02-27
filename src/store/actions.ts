import { Action, ActionCreator } from 'redux';

export interface ActionToggleActiveSubcategory extends Action {
	type: 'ToggleActiveSubcategory';
	data: {
		subcategory: string;
		active?: boolean;
	};
}

export const isActionToggleActiveSubcategory = (action: Action): action is ActionToggleActiveSubcategory => (
	action.type === 'ToggleActiveSubcategory'
);

export const toggleActiveSubcategory: ActionCreator<ActionToggleActiveSubcategory> =
(subcategory: string, active?: boolean) => ({
	type: 'ToggleActiveSubcategory',
	data: {
		subcategory,
		active,
	},
});

export interface ActionToggleWideTable extends Action {
	type: 'ToggleWideTable';
	data: {
		wide?: boolean;
	};
}

export const isActionToggleWideTable = (action: Action): action is ActionToggleWideTable => (
	action.type === 'ToggleWideTable'
);

export const toggleWideTable: ActionCreator<ActionToggleWideTable> = (wide?: boolean) => ({
	type: 'ToggleWideTable',
	data: {
		wide,
	},
});
