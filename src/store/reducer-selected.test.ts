import { selectElement } from './actions';
import reducer, { isElementSelected, ReducerState } from './reducer-selected';

describe('isElementSelected()', () => {
	it('returns false when selected element is null', () => {
		const state: ReducerState = {
			selectedAtomicNumber: null,
		};
		const result = isElementSelected(state, 1);
		expect(result).not.toBeTruthy();
	});

	it('returns false when selected element is 2', () => {
		const state: ReducerState = {
			selectedAtomicNumber: 2,
		};
		const result = isElementSelected(state, 1);
		expect(result).not.toBeTruthy();
	});

	it('returns true when selected element is 1', () => {
		const state: ReducerState = {
			selectedAtomicNumber: 1,
		};
		const result = isElementSelected(state, 1);
		expect(result).toBeTruthy();
	});
});

describe('selectElement()', () => {
	it('selects the element with the given atomic number', () => {
		const state: ReducerState = {
			selectedAtomicNumber: null,
		};
		const action = selectElement(1);
		const result = reducer(state, action);
		expect(result).toHaveProperty('selectedAtomicNumber', 1);
	});
});
