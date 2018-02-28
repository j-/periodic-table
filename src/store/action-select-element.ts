import { Action, ActionCreator } from 'redux';

export interface ActionSelectElement extends Action {
	type: 'SelectElement';
	data: {
		atomicNumber: number;
	};
}

export const isActionSelectElement = (action: Action): action is ActionSelectElement => (
	action.type === 'SelectElement'
);

export const selectElement: ActionCreator<ActionSelectElement> = (atomicNumber: number) => ({
	type: 'SelectElement',
	data: {
		atomicNumber,
	},
});
