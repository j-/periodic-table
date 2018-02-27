import { connect } from 'react-redux';
import PeriodicTable from '../components/PeriodicTable';
import { ReducerState, isWide } from '../store';

interface StateProps {
	wide: boolean;
}

const mapStateToProps = (state: ReducerState): StateProps => ({
	wide: isWide(state),
});

export default connect(
	mapStateToProps,
)(PeriodicTable);
