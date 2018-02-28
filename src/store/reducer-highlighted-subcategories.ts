import { Reducer } from 'redux';
import elements from '../data/elements';

import {
	isActionToggleHighlightedSubcategory,
	isActionHighlightAllSubcategories,
	isActionHighlightNoSubcategories,
} from './actions';

export interface ReducerState {
	highlightedSubcategories: (string | null)[];
}

const DEFAULT_STATE: ReducerState = {
	highlightedSubcategories: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleHighlightedSubcategory(action)) {
		const { subcategory } = action.data;
		const index = state.highlightedSubcategories.indexOf(subcategory);
		const isFound = index >= 0;
		let { highlighted } = action.data;

		// If highlighted state is not specified, toggle current state
		if (highlighted === undefined) {
			highlighted = !isFound;
		}

		// If there's nothing to do, exit
		if (highlighted && isFound || !highlighted && !isFound) {
			return state;
		}

		// Clone the current list of highlighted subcategories
		const highlightedSubcategories = [...state.highlightedSubcategories];

		// Mutate the cloned list
		if (highlighted) {
			highlightedSubcategories.push(subcategory);
		} else {
			highlightedSubcategories.splice(index, 1);
		}

		return { ...state, highlightedSubcategories };
	}

	if (isActionHighlightAllSubcategories(action)) {
		const categoriesMap = {};
		elements.forEach((element) => categoriesMap[element.subcategory] = true);
		return { ...state, highlightedSubcategories: Object.keys(categoriesMap) };
	}

	if (isActionHighlightNoSubcategories(action)) {
		return { ...state, highlightedSubcategories: [] };
	}

	return state;
};

export default reducer;

export const isSubcategoryHighlighted = (state: ReducerState, subcategory: string | null): boolean => (
	state.highlightedSubcategories.indexOf(subcategory) >= 0
);
