import { Action, ActionCreator } from 'redux';

export interface ActionHighlightAllSubcategories extends Action {
	type: 'HighlightAllSubcategories';
}

export const isActionHighlightAllSubcategories = (action: Action): action is ActionHighlightAllSubcategories => (
	action.type === 'HighlightAllSubcategories'
);

export const highlightAllSubcategories: ActionCreator<ActionHighlightAllSubcategories> = () => ({
	type: 'HighlightAllSubcategories',
});
