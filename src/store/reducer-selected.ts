import { Reducer } from 'redux';
import { isActionSelectElement } from './actions';

export interface ReducerState {
	selectedAtomicNumber: number | null;
}

const DEFAULT_STATE: ReducerState = {
	selectedAtomicNumber: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionSelectElement(action)) {
		return {
			...state,
			selectedAtomicNumber: action.data.atomicNumber,
		};
	}

	return state;
};

export default reducer;

export const getSelectedElementNumber = (state: ReducerState): number | null => (
	state.selectedAtomicNumber
);

export const isElementSelected = (state: ReducerState, atomicNumber: number): boolean => (
	getSelectedElementNumber(state) === atomicNumber
);

export const isAnyElementSelected = (state: ReducerState): boolean => (
	getSelectedElementNumber(state) !== null
);
