import { connect } from 'react-redux';
import PeriodicTableElement from '../components/PeriodicTableElement';
import { ReducerState, isSubcategoryHighlighted } from '../store';

interface StateProps {
	isHighlighted: boolean;
}

interface OwnProps {
	subcategory: string;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	isHighlighted: isSubcategoryHighlighted(state, props.subcategory),
});

export default connect(
	mapStateToProps,
)(PeriodicTableElement);
