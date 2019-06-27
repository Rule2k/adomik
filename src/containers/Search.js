import { connect } from 'react-redux';

import Search from 'src/components/Search';
import { inputChanged } from 'src/store/reducer';


const mapStateToProps = (state, ownProps) => ({
  searchInput: state.searchInput,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  inputChanged: (input) => {
    dispatch(inputChanged(input));
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
