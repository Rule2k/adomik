import { connect } from 'react-redux';

import Dropdown from 'src/components/Dropdown';
import { dropdownValueHasChanged } from 'src/store/reducer';


const mapStateToProps = (state, ownProps) => ({
  dropdownValue: state.dropdownValue,
  city: state.components,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  dropdownValueHasChanged: (value) => {
    dispatch(dropdownValueHasChanged(value));
  },
});

const DropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

export default DropdownContainer;
