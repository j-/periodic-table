import * as highlightedSubcategories from './reducer-highlighted-subcategories';
import * as appearance from './reducer-appearance';
import * as selected from './reducer-selected';
import { combineReducers } from 'redux';

export interface ReducerState {
	highlightedSubcategories: highlightedSubcategories.ReducerState;
	appearance: appearance.ReducerState;
	selected: selected.ReducerState;
}

export default combineReducers<ReducerState>({
	highlightedSubcategories: highlightedSubcategories.default,
	appearance: appearance.default,
	selected: selected.default,
});

export const isSubcategoryHighlighted = (state: ReducerState, subcategory: string | null): boolean => (
	highlightedSubcategories.isSubcategoryHighlighted(state.highlightedSubcategories, subcategory)
);

export const isWide = (state: ReducerState): boolean => (
	appearance.isWide(state.appearance)
);

export const isElementSelected = (state: ReducerState, atomicNumber: number): boolean => (
	selected.isElementSelected(state.selected, atomicNumber)
);

export const isAnyElementSelected = (state: ReducerState): boolean => (
	selected.isAnyElementSelected(state.selected)
);
