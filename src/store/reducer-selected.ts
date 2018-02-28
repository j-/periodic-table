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

export const isElementSelected = (state: ReducerState, atomicNumber: number): boolean => (
	atomicNumber === state.selectedAtomicNumber
);

export const isAnyElementSelected = (state: ReducerState): boolean => (
	state.selectedAtomicNumber === null
);
