import { connect } from 'react-redux';

import Table from 'src/components/Table';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  filteredList: state.filteredUsersList,
  searchDone: state.searchDone,
  fixedCity: state.fixedCity,
  fixedInput: state.fixedInput,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

export default TableContainer;
