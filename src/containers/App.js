import { connect } from 'react-redux';

import App from 'src/components/App';
import { reset } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  loading: state.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  reset: () => {
    dispatch(reset());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
