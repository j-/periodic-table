import { Reducer } from 'redux';
import { isActionToggleWideTable } from './actions';

export interface ReducerState {
	isWide: boolean;
}

const DEFAULT_STATE: ReducerState = {
	isWide: false,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionToggleWideTable(action)) {
		return {
			...state,
			isWide: action.data.wide === undefined ?
				!state.isWide :
				action.data.wide,
		};
	}

	return state;
};

export default reducer;

export const isWide = (state: ReducerState): boolean => (
	state.isWide
);
