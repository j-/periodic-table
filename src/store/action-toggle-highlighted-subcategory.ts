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
