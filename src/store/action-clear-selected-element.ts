import { Action, ActionCreator } from 'redux';

export interface ActionClearSelectedElement extends Action {
	type: 'ClearSelectedElement';
}

export const isActionClearSelectedElement = (action: Action): action is ActionClearSelectedElement => (
	action.type === 'ClearSelectedElement'
);

export const clearSelectedElement: ActionCreator<ActionClearSelectedElement> = (atomicNumber: number) => ({
	type: 'ClearSelectedElement',
});
