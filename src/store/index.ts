import * as highlightedSubcategories from './reducer-highlighted-subcategories';
import * as appearance from './reducer-appearance';
import { combineReducers } from 'redux';

export interface ReducerState {
	highlightedSubcategories: highlightedSubcategories.ReducerState;
	appearance: appearance.ReducerState;
}

export default combineReducers<ReducerState>({
	highlightedSubcategories: highlightedSubcategories.default,
	appearance: appearance.default,
});

export const isSubcategoryHighlighted = (state: ReducerState, subcategory: string | null): boolean => (
	highlightedSubcategories.isSubcategoryHighlighted(state.highlightedSubcategories, subcategory)
);

export const isWide = (state: ReducerState): boolean => (
	appearance.isWide(state.appearance)
);
