import { connect, Dispatch } from 'react-redux';
import PeriodicTableElement from '../components/PeriodicTableElement';
import { ReducerState, isSubcategoryHighlighted, isElementSelected } from '../store';
import { selectElement } from '../store/actions';
import { Action } from 'redux';

interface StateProps {
	isHighlighted: boolean;
	isSelected: boolean;
}

interface DispatchProps {
	selectElement: () => void;
}

interface OwnProps {
	subcategory: string;
	number: number;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	isHighlighted: isSubcategoryHighlighted(state, props.subcategory),
	isSelected: isElementSelected(state, props.number),
});

const mapDispatchProps = (dispatch: Dispatch<Action>, props: OwnProps): DispatchProps => ({
	selectElement: () => dispatch(selectElement(props.number)),
});

export default connect(
	mapStateToProps,
	mapDispatchProps,
)(PeriodicTableElement);
