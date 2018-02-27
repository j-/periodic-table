import { Reducer } from 'redux';
import { isActionToggleActiveSubcategory } from './actions';

export interface ReducerState {
	activeSubcategories: (string | null)[];
}

const DEFAULT_STATE: ReducerState = {
	activeSubcategories: [],
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleActiveSubcategory(action)) {
		const { subcategory } = action.data;
		const index = state.activeSubcategories.indexOf(subcategory);
		const isFound = index >= 0;
		let { active } = action.data;

		// If active state is not specified, toggle current state
		if (active === undefined) {
			active = !isFound;
		}

		// If there's nothing to do, exit
		if (active && isFound || !active && !isFound) {
			return state;
		}

		// Clone the current list of active subcategories
		const activeSubcategories = [...state.activeSubcategories];

		// Mutate the cloned list
		if (active) {
			activeSubcategories.push(subcategory);
		} else {
			activeSubcategories.splice(index, 1);
		}

		return { ...state, activeSubcategories };
	}

	return state;
};

export default reducer;

export const isSubcategoryActive = (state: ReducerState, subcategory: string | null): boolean => (
	state.activeSubcategories.indexOf(subcategory) >= 0
);
