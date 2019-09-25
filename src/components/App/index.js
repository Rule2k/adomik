import React from 'react';
import PropTypes from 'prop-types';
import ParsingJson from 'src/containers/ParsingJson';
import './app.scss';

const App = ({ reset, loading }) => {
  // bouton pour reset l'application et rafficher le tableau original
  const handleReset = (event) => {
    event.preventDefault();
    reset();
  };

  return (
    <div id="app">
      { loading ? 'LOADING'
        : <>
          <ParsingJson />
          <button id="reset" type="submit" onClick={handleReset}>Reset</button>
      </>
      }
    </div>
  );
};


App.propTypes = {
  reset: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};


export default App;
