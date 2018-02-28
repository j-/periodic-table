import { Action, ActionCreator } from 'redux';

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
