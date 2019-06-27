import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { filteredUsersList, searchDone, fixedCity, fixedInput } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  searchInput: state.searchInput,
  dropdownValue: state.dropdownValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filteredUsersList: (list) => {
    dispatch(filteredUsersList(list));
  },
  searchDone: (bool) => {
    dispatch(searchDone(bool));
  },
  fixedCity: () => {
    dispatch(fixedCity());
  },
  fixedInput: () => {
    dispatch(fixedInput());
  },
});

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

export default FormContainer;
