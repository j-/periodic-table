import { connect, Dispatch } from 'react-redux';
import SubcategoryItem from '../components/SubcategoryItem';
import { ReducerState, isSubcategoryHighlighted } from '../store';
import { ActionToggleHighlightedSubcategory, toggleHighlightedSubcategory } from 'src/store/actions';

interface StateProps {
	isHighlighted: boolean;
}

interface DispatchProps {
	onToggle: () => void;
}

interface OwnProps {
	subcategory: string | null;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	isHighlighted: isSubcategoryHighlighted(state, props.subcategory),
});

const mapDispatchToProps =
(dispatch: Dispatch<ActionToggleHighlightedSubcategory>, props: OwnProps): DispatchProps => ({
	onToggle: () => dispatch(toggleHighlightedSubcategory(props.subcategory)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SubcategoryItem);
