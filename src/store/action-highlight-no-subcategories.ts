import { Action, ActionCreator } from 'redux';

export interface ActionHighlightNoSubcategories extends Action {
	type: 'HighlightNoSubcategories';
}

export const isActionHighlightNoSubcategories = (action: Action): action is ActionHighlightNoSubcategories => (
	action.type === 'HighlightNoSubcategories'
);

export const highlightNoSubcategories: ActionCreator<ActionHighlightNoSubcategories> = () => ({
	type: 'HighlightNoSubcategories',
});
