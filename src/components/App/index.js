import React from 'react';
import PropTypes from 'prop-types';
import Form from 'src/containers/Form';
import Table from 'src/containers/Table';
import './app.scss';

const App = ({ reset }) => {
  // bouton pour reset l'application et rafficher le tableau original
  const handleReset = (event) => {
    event.preventDefault();
    reset();
  };
  return (
    <div id="app">
      <Form />
      <Table />
      <button id="reset" type="submit" onClick={handleReset}>Reset</button>
    </div>
  );
};


App.propTypes = {
  reset: PropTypes.func.isRequired,
};


export default App;
