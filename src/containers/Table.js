import { connect } from 'react-redux';

import Table from 'src/components/Table';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  searchInput: state.searchInput,
  dropdownValue: state.dropdownValue,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

export default TableContainer;
