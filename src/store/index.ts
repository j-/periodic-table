import * as activeSubcategories from './reducer-active-subcategories';
import { combineReducers } from 'redux';

export interface ReducerState {
	activeSubcategories: activeSubcategories.ReducerState;
}

export default combineReducers<ReducerState>({
	activeSubcategories: activeSubcategories.default,
});

export const isSubcategoryActive = (state: ReducerState, subcategory: string | null): boolean => (
	activeSubcategories.isSubcategoryActive(state.activeSubcategories, subcategory)
);
