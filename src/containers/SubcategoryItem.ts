import { connect, Dispatch } from 'react-redux';
import SubcategoryItem from '../components/SubcategoryItem';
import { ReducerState, isSubcategoryActive } from '../store';
import { ActionToggleActiveSubcategory, toggleActiveSubcategory } from 'src/store/actions';

interface StateProps {
	isActive: boolean;
}

interface DispatchProps {
	onToggle: () => void;
}

interface OwnProps {
	subcategory: string | null;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	isActive: isSubcategoryActive(state, props.subcategory),
});

const mapDispatchToProps = (dispatch: Dispatch<ActionToggleActiveSubcategory>, props: OwnProps): DispatchProps => ({
	onToggle: () => dispatch(toggleActiveSubcategory(props.subcategory)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SubcategoryItem);
