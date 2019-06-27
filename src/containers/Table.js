import { connect } from 'react-redux';

import Table from 'src/components/Table';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Table);

export default TableContainer;
