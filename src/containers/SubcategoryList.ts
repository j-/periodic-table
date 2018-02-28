import { connect } from 'react-redux';
import SubcategoryList from '../components/SubcategoryList';

import {
	highlightAllSubcategories,
	highlightNoSubcategories,
} from '../store/actions';

interface DispatchProps {
	highlightAllSubcategories: () => void;
	highlightNoSubcategories: () => void;
}

const mapDispatchToProps: DispatchProps = {
	highlightAllSubcategories,
	highlightNoSubcategories,
};

export default connect(
	null,
	mapDispatchToProps,
)(SubcategoryList);
