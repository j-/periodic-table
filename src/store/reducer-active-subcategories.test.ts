import { toggleActiveSubcategory } from './actions';
import reducer, { isSubcategoryActive } from './reducer-active-subcategories';

describe('isSubcategoryActive()', () => {
	it('returns false when given empty array', () => {
		const state = {
			activeSubcategories: [],
		};
		expect(isSubcategoryActive(state, 'hello')).not.toBeTruthy();
		expect(isSubcategoryActive(state, null)).not.toBeTruthy();
	});

	it('returns false when a subcategory is not found', () => {
		const state = {
			activeSubcategories: ['foo', 'baz'],
		};
		expect(isSubcategoryActive(state, 'bar')).not.toBeTruthy();
		expect(isSubcategoryActive(state, null)).not.toBeTruthy();
	});

	it('returns true when a subcategory is found', () => {
		const state = {
			activeSubcategories: ['foo', null, 'baz'],
		};
		expect(isSubcategoryActive(state, 'foo')).toBeTruthy();
		expect(isSubcategoryActive(state, null)).toBeTruthy();
	});
});

describe('toggleActiveSubcategory()', () => {
	it('can add subcategories to active list', () => {
		const state = {
			activeSubcategories: [],
		};
		const action = toggleActiveSubcategory('foobar', true);
		const result = reducer(state, action);
		expect(result.activeSubcategories).toContain('foobar');
	});

	it('can remove subcategories from active list', () => {
		const state = {
			activeSubcategories: ['foobar'],
		};
		const action = toggleActiveSubcategory('foobar', false);
		const result = reducer(state, action);
		expect(result.activeSubcategories).not.toContain('foobar');
	});

	it('can toggle subcategories in active list', () => {
		const state = {
			activeSubcategories: [],
		};
		const action = toggleActiveSubcategory('foobar');
		const result1 = reducer(state, action);
		expect(result1.activeSubcategories).toContain('foobar');
		const result2 = reducer(result1, action);
		expect(result2.activeSubcategories).not.toContain('foobar');
	});

	it('will no-op if subcategory is already inactive', () => {
		const state = {
			activeSubcategories: ['foobar'],
		};
		const action = toggleActiveSubcategory('foobar', true);
		const result = reducer(state, action);
		expect(result).toEqual(state);
	});

	it('will no-op if subcategory is already inactive', () => {
		const state = {
			activeSubcategories: [],
		};
		const action = toggleActiveSubcategory('foobar', false);
		const result = reducer(state, action);
		expect(result).toEqual(state);
	});
});
