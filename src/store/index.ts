import * as activeSubcategories from './reducer-active-subcategories';
import * as appearance from './reducer-appearance';
import { combineReducers } from 'redux';

export interface ReducerState {
	activeSubcategories: activeSubcategories.ReducerState;
	appearance: appearance.ReducerState;
}

export default combineReducers<ReducerState>({
	activeSubcategories: activeSubcategories.default,
	appearance: appearance.default,
});

export const isSubcategoryActive = (state: ReducerState, subcategory: string | null): boolean => (
	activeSubcategories.isSubcategoryActive(state.activeSubcategories, subcategory)
);

export const isWide = (state: ReducerState): boolean => (
	appearance.isWide(state.appearance)
);
