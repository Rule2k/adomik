import { connect } from 'react-redux';

import ParsingJson from 'src/components/ParsingJson';

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
});

const mapDispatchToProps = (dispatch, ownProps) => ({});

const ParsingJsonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParsingJson);

export default ParsingJsonContainer;
