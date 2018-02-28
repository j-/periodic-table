import { connect } from 'react-redux';
import ElementDetails from '../components/ElementDetails';
import { clearSelectedElement } from '../store/action-clear-selected-element';

interface DispatchProps {
	clearSelected: () => void;
}

const mapDispatchToProps: DispatchProps = {
	clearSelected: clearSelectedElement,
};

export default connect(
	null,
	mapDispatchToProps,
)(ElementDetails);
