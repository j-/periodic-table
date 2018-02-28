import { Action, ActionCreator } from 'redux';

export interface ActionToggleHighlightedSubcategory extends Action {
	type: 'ToggleHighlightedSubcategory';
	data: {
		subcategory: string;
		highlighted?: boolean;
	};
}

export const isActionToggleHighlightedSubcategory =
(action: Action): action is ActionToggleHighlightedSubcategory => (
	action.type === 'ToggleHighlightedSubcategory'
);

export const toggleHighlightedSubcategory: ActionCreator<ActionToggleHighlightedSubcategory> =
(subcategory: string, highlighted?: boolean) => ({
	type: 'ToggleHighlightedSubcategory',
	data: {
		subcategory,
		highlighted,
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
