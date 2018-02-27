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
