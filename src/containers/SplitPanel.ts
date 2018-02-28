import { connect } from 'react-redux';
import SplitPanel from '../components/SplitPanel';
import { ReducerState, isAnyElementSelected, getSelectedElementNumber } from '../store';

interface StateProps {
	isAnyElementSelected: boolean;
	selectedElementNumber: number | null;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	isAnyElementSelected: isAnyElementSelected(state),
	selectedElementNumber: getSelectedElementNumber(state),
});

export default connect(
	mapStateToProps,
)(SplitPanel);
