import { connect } from 'react-redux';
import PeriodicTableElement from '../components/PeriodicTableElement';
import { ReducerState, isSubcategoryActive } from '../store';

interface StateProps {
	isActive: boolean;
}

interface OwnProps {
	subcategory: string;
}

const mapStateToProps = (state: ReducerState, props: OwnProps): StateProps => ({
	isActive: isSubcategoryActive(state, props.subcategory),
});

export default connect(
	mapStateToProps,
)(PeriodicTableElement);
