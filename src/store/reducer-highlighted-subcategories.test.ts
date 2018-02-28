import { toggleHighlightedSubcategory } from './actions';
import reducer, { isSubcategoryHighlighted, ReducerState } from './reducer-highlighted-subcategories';

describe('isSubcategoryHighlighted()', () => {
	it('returns false when given empty array', () => {
		const state: ReducerState = {
			highlightedSubcategories: [],
		};
		expect(isSubcategoryHighlighted(state, 'hello')).not.toBeTruthy();
		expect(isSubcategoryHighlighted(state, null)).not.toBeTruthy();
	});

	it('returns false when a subcategory is not found', () => {
		const state: ReducerState = {
			highlightedSubcategories: ['foo', 'baz'],
		};
		expect(isSubcategoryHighlighted(state, 'bar')).not.toBeTruthy();
		expect(isSubcategoryHighlighted(state, null)).not.toBeTruthy();
	});

	it('returns true when a subcategory is found', () => {
		const state: ReducerState = {
			highlightedSubcategories: ['foo', null, 'baz'],
		};
		expect(isSubcategoryHighlighted(state, 'foo')).toBeTruthy();
		expect(isSubcategoryHighlighted(state, null)).toBeTruthy();
	});
});

describe('toggleHighlightedSubcategory()', () => {
	it('can add subcategories to highlighted list', () => {
		const state: ReducerState = {
			highlightedSubcategories: [],
		};
		const action = toggleHighlightedSubcategory('foobar', true);
		const result = reducer(state, action);
		expect(result.highlightedSubcategories).toContain('foobar');
	});

	it('can remove subcategories from highlighted list', () => {
		const state: ReducerState = {
			highlightedSubcategories: ['foobar'],
		};
		const action = toggleHighlightedSubcategory('foobar', false);
		const result = reducer(state, action);
		expect(result.highlightedSubcategories).not.toContain('foobar');
	});

	it('can toggle subcategories in highlighted list', () => {
		const state: ReducerState = {
			highlightedSubcategories: [],
		};
		const action = toggleHighlightedSubcategory('foobar');
		const result1 = reducer(state, action);
		expect(result1.highlightedSubcategories).toContain('foobar');
		const result2 = reducer(result1, action);
		expect(result2.highlightedSubcategories).not.toContain('foobar');
	});

	it('will no-op if subcategory is already highlighted', () => {
		const state: ReducerState = {
			highlightedSubcategories: ['foobar'],
		};
		const action = toggleHighlightedSubcategory('foobar', true);
		const result = reducer(state, action);
		expect(result).toEqual(state);
	});

	it('will no-op if subcategory is not highlighted', () => {
		const state: ReducerState = {
			highlightedSubcategories: [],
		};
		const action = toggleHighlightedSubcategory('foobar', false);
		const result = reducer(state, action);
		expect(result).toEqual(state);
	});
});
